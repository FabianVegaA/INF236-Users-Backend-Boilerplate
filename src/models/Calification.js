import { Sequelize } from "sequelize";
import sequelize from "../database.js";

class Calification extends Sequelize.Model {}

Calification.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      type: Sequelize.INTEGER,
    },
    courseId: {
      type: Sequelize.INTEGER,
    },
    score: {
      type: Sequelize.INTEGER,
    },
    comment: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "calification",
    schema: "public",
  }
);

export default Calification;
