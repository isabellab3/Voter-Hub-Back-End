const db = require("../db")
const Sequelize = require("sequelize")

const Message = db.define("message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user: {
    type: Sequelize.STRING
    //     unique: false,
    //    allowNull: false
  },
  text: {
    type: Sequelize.STRING
    //  allowNull: false
  },
  messageBoardID: {
    type: Sequelize.INTEGER
    //    allowNull: true
  }
})

module.exports = Message
