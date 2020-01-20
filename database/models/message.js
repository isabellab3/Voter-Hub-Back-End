const db = require("../db");
const Sequelize = require("sequelize");

const Message = db.define("message", {
    user: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
      }
    }
  );

module.exports = Message;