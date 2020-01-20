const db = require("../db");
const Sequelize = require("sequelize");

const MessageBoardCollection = db.define("messageboardcollection", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    officialName: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false
    }
});

module.exports = MessageBoardCollection;