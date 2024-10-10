import initModels from "../models/init-models.js";
import sequelize from "../config/sequelize.js";
import { Op, QueryTypes, Sequelize } from "sequelize";

const manageController = {
  AddRole: async (req, res) => {
    const { name } = req.body;
    const institutionId = req.institution_id;

    try {
      await initModels(sequelize).roles.create({
        name,
        institution_id: institutionId,
      });

      res.status(200).json({ message: "berhasil menambahkan role!" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  GetRoles: async (req, res) => {
    const institutionId = req.institution_id;

    try {
      const data = await initModels(sequelize).roles.findAll({
        where: {
          institution_id: institutionId,
        },
        attributes: ["role_id", "institution_id", "name"],
      });

      res
        .status(200)
        .json({ message: "berhasil mendapatkan data role!", data });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  GetRoleByID: async (req, res) => {
    const institutionId = req.institution_id;
    const { role_id } = req.params;

    // Raw query SQL
    const sqlQuery = `
      SELECT 
        f.feature_id, 
        f.name AS feature_name,
        ac.access_id, 
        r.role_id, 
        r.name AS role_name,
        CASE
          WHEN ac.access_id IS NOT NULL AND ac.deleted_at IS NULL THEN true
          ELSE false
        END AS is_enable
      FROM
        features f
      LEFT JOIN
        "Accesses" ac ON ac.feature_id = f.feature_id AND ac.role_id = ${role_id}
      LEFT JOIN 
        roles r ON ac.role_id = r.role_id AND r.role_id = ${role_id};
    `;

    try {
      const data = await sequelize.query(sqlQuery, {
        replacements: {
          roleId: parseInt(role_id),
          institutionId: institutionId,
        }, // Mengganti parameter
        type: QueryTypes.SELECT, // Mengambil data sebagai hasil SELECT
      });
      res
        .status(200)
        .json({ message: "berhasil mendapatkan data role!", data });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  addAccess: async (req, res) => {
    const { role_id, feature_id } = req.params;
    const sqlQuery = `SELECT * from "Accesses" WHERE role_id = :roleId AND feature_id = :featureId`;

    try {
      const isExist = await sequelize.query(sqlQuery, {
        replacements: {
          roleId: role_id,
          featureId: feature_id,
        }, // Mengganti parameter
        type: QueryTypes.SELECT, //
      });

      if (isExist.length > 0) {
        return res.status(400).json({ message: "data alreadt exist!" });
      }

      await initModels(sequelize).Accesses.create({
        role_id,
        feature_id,
      });

      res.status(200).json({ message: "berhasil menambahkan akses!" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  disableEnableAccess: async (req, res) => {
    const { role_id, feature_id } = req.params;
    const sqlQuery = `SELECT * from "Accesses" WHERE role_id = :roleId AND feature_id = :featureId LIMIT 1`;

    try {
      const [data] = await sequelize.query(sqlQuery, {
        replacements: { roleId: role_id, featureId: feature_id },
        type: QueryTypes.SELECT,
      });

      // Tentukan query berdasarkan nilai deleted_at
      const deletedAtQuery = data.deleted_at
        ? `UPDATE "Accesses" SET deleted_at = NULL WHERE role_id = :roleId AND feature_id = :featureId`
        : `UPDATE "Accesses" SET deleted_at = NOW() WHERE role_id = :roleId AND feature_id = :featureId`;

      // Lakukan update
      await sequelize.query(deletedAtQuery, {
        replacements: { roleId: role_id, featureId: feature_id },
        type: QueryTypes.UPDATE,
      });

      res.status(200).json({ message: "berhasil ubah akses!" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getFeatures: async (req, res) => {
    try {
      const data = await initModels(sequelize).features.findAll({
        attributes: ["feature_id", "name"],
      });

      res
        .status(200)
        .json({ message: "berhasil mendapatkan data fitur!", data });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default manageController;
