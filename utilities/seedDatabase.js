const { Message } = require('../database/models');
const { MessageBoard } = require('../database/models');
/* const { MessageBoardCollection } = require('../database/models');
 */
const messages = require('../data/messages');
const messageboards = require('../data/messageboards');
/* const messageboardcollection = require('../data/messageboardcollection');
 */

const populateMessagesTable = async (messages) => {
    for(let i = 0; i < messages.length; i++){
      let message = messages[i];
      await Message.create(message);

      // //associations
      // let messageBoardObject = await MessageBoard.findByPk(message.messageBoardID);
      // // console.log(messageBoardObject.dataValues);
      // await message.setMessageboard(messageBoardObject);
    }
}

const populateMessageBoardTable = async (messageboards) => {
    for(let i = 0; i < messageboards.length; i++){
      let currentMessageBoard = messageboards[i];
      await MessageBoard.create(currentMessageBoard);

      // console.log(i, currentMessageBoard.officialId);
      // let messageBoardCollectionObject = await MessageBoardCollection.findByPk(currentMessageBoard.officialId);
      // console.log(messageBoardCollectionObject);
      // await currentMessageBoard.setMessageboardcollection(messageBoardCollectionObject);
    }
}

/* const populateMessageBoardCollectionTable = async (messageboardcollection) => {
    for(let i = 0; i < messageboardcollection.length; i++){
      let currentMessageBoardCollection = messageboardcollection[i];
      await MessageBoardCollection.create(currentMessageBoardCollection);
    }
} */

const setAssociations = async () => {
    let messages = await Message.findAll();
    for(let i = 0; i < messages.length; i++){
      let messageBoardObject = await MessageBoard.findByPk(messages[i].messageBoardID);
      messages[i].setMessageboard(messageBoardObject);
    }

    let messageboards = await MessageBoard.findAll();
    for(let i = 0; i < messageboards.length; i++){
      let messageBoard = messageboards[i];
      /* let messageBoardCollectionObject = await MessageBoardCollection.findByPk(messageBoard.officialId); */
/*       await messageBoard.setMessageboardcollection(messageBoardCollectionObject);
 */  
    }
}

const seedDatabase = async () => {
  try {
/*     await populateMessageBoardCollectionTable(messageboardcollection);
 */    await populateMessageBoardTable(messageboards);
    await populateMessagesTable(messages);
    await setAssociations();
    console.log("Successfully seeded");
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }

}

module.exports = seedDatabase;
