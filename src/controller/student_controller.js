import sequelize from "../config/sequelize";
import initModels from "../models/init-models";

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
