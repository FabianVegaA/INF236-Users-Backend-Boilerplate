import { Sequelize } from "sequelize";
import sequelize from "../database.js";

class Student extends Sequelize.Model {}

Student.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: Sequelize.DataTypes.STRING,
    email: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    fk_idCalification: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    fk_idGrade: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Student;
