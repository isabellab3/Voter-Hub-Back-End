const db = require("../db");
const Sequelize = require("sequelize");

const MessageBoard = db.define("messageboard", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subject: {
      type: Sequelize.STRING,
      unique: false,
    },
    officialId: {
        type: Sequelize.INTEGER,
        unique: false,
    }

});

module.exports = MessageBoard;