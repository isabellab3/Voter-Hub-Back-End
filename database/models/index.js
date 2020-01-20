const User = require("./user");
const Message = require("./message");
const MessageBoard = require("./messageboard");

// Make associations here, if necessary;
MessageBoard.hasMany(Message);
Message.belongsTo(MessageBoard);

module.exports = {
  User,
  Message,
  MessageBoard
};