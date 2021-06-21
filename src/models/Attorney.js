import { Sequelize } from 'sequelize';
import sequelize from '../database.js';

class Attorney extends Sequelize.Model {};

Attorney.init({
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: Sequelize.DataTypes.STRING,
  telephone: Sequelize.DataTypes.STRING,
  email: {
    type: Sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false
  }}, {
    sequelize,
    timestamps: true,
  }
);

export default Attorney;