import initModels from "../models/init-models.js";
import sequelize from "../config/sequelize.js";
import { QueryTypes } from "sequelize";

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

  GetRolebyID: async (req, res) => {
    const institutionId = req.institution_id;
    const { role_id } = req.params;

    // Raw query SQL
    const sqlQuery = `
      SELECT 
        r.role_id, 
        r.institution_id, 
        r.name,
        ac.access_id, 
        f.feature_id, 
        f.name as feature_name
      FROM 
        roles r
      JOIN 
        "Accesses" ac ON ac.role_id = r.role_id
      JOIN 
        features f ON ac.feature_id = f.feature_id
      WHERE 
        r.role_id = :roleId AND r.institution_id = :institutionId
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

    try {
      await initModels(sequelize).Accesses.create({
        role_id,
        feature_id,
      });

      res.status(200).json({ message: "berhasil menambahkan akses!" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default manageController;
