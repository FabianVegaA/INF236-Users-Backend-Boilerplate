import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class Grade extends Sequelize.Model {};

Grade.init({
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    paralel: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
    fk_idTeacher: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    }}, {
      sequelize,
      timestamps: true,
    }
  );
  
  export default Grade;