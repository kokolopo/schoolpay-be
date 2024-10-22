import sequelize from "../config/sequelize.js";
import initModels from "../models/init-models.js";

const studentController = {
  searchByNIS: async (req, res) => {
    try {
      const data = await initModels(sequelize).students.findOne({
        where: {},
      });
    } catch (error) {}
  },
};

export default studentController;
