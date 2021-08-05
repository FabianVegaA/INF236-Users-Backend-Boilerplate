import { Sequelize } from "sequelize";
import sequelize from "../database.js";

class Notice extends Sequelize.Model {}

Notice.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sender: Sequelize.DataTypes.INTEGER,
    receiver: Sequelize.DataTypes.INTEGER,
    subject: Sequelize.DataTypes.STRING,
    content: Sequelize.DataTypes.TEXT,
    status: Sequelize.DataTypes.BOOLEAN,
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Notice;
