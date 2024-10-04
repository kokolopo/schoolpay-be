import initModels from "../models/init-models.js";
import sequelize from "../config/sequelize.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { comparePassword, hashPassword } from "../utility/gen_password.js";
dotenv.config();

const usersController = {
  getAll: async (req, res) => {
    try {
      const data = await initModels(sequelize).users.findAll();

      res.json({ data });
    } catch (error) {
      res.json(error);
    }
  },

  userRegister: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const t = await sequelize.transaction();

    try {
      const institution = await initModels(sequelize).Institutions.create(
        req.body.institution,
        {
          transaction: t,
        }
      );

      const role = await initModels(sequelize).roles.create(
        {
          institution_id: institution.institution_id,
          name: "SUPER_ADMIN",
        },
        { transaction: t }
      );

      await initModels(sequelize).Accesses.create(
        {
          feature_id: 1,
          role_id: role.role_id,
        },
        { transaction: t }
      );

      req.body.user.password = await hashPassword(req.body.user.password);
      req.body.user["institution_id"] = institution.institution_id;
      req.body.user["role_id"] = role.role_id;
      req.body.user["avatar"] = "Default";

      await initModels(sequelize).users.create(req.body.user, {
        transaction: t,
      });

      await t.commit();

      res
        .status(201)
        .json({ message: "pendaftaran berhasil!", data: institution });
    } catch (error) {
      await t.rollback();

      res.status(500).json({ error });
    }
  },

  userLogin: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const data = await initModels(sequelize).users.findOne({
        where: { email: req.body.email },
      });
      if (data === null) {
        return res.status(400).json({
          errors: "akun tidak ditemukan, silahkan melakukan registrasi!",
        });
      }

      const isValidPassword = await comparePassword(
        req.body.password,
        data.password
      );

      if (!isValidPassword) {
        return res.status(400).json({ errors: "password salah!" });
      }

      // create jwt token
      const { fullname, role_id, institution_id } = data;
      const accessToken = jwt.sign(
        { fullname, role_id, institution_id },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "1d",
        }
      );
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: "berhasil login!", data, accessToken });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default usersController;
