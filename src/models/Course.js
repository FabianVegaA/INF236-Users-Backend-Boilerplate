import { Sequelize } from "sequelize";
import sequelize from "../database.js";

class Course extends Sequelize.Model {}

Course.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.DataTypes.STRING,
    fk_idGrade:{
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    fk_idTeacher: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Course;
