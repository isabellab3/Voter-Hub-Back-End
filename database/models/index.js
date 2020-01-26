const User = require("./user");
const Message = require("./message");
const MessageBoard = require("./messageboard");
/* const MessageBoardCollection = require("./messageboardcollection");
 */
// Make associations here, if necessary;
MessageBoard.hasMany(Message);
Message.belongsTo(MessageBoard);

/* MessageBoardCollection.hasMany(MessageBoard);
MessageBoard.belongsTo(MessageBoardCollection);
 */
module.exports = {
  User,
  Message,
  MessageBoard,
/*   MessageBoardCollection
 */};