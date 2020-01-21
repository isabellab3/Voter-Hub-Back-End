const { Message } = require('../database/models');
const { MessageBoard } = require('../database/models');
const { MessageBoardCollection } = require('../database/models');

const messages = require('../data/messages');
const messageboards = require('../data/messageboards');
const messageboardcollection = require('../data/messageboardcollection');

//Populate the Campus table in the database with campus data (with everything except enrollments)
// const populateCampusesTable = async (campuses) =>{
//   for(let i = 0; i < campuses.length; i++){
//     let currentCampus = campuses[i];
//     let saveCampus = await Campus.create(currentCampus);
//   }
// }

// const populateStudentsTable = async (students) => {
//   for(let i = 0; i < students.length; i++){
//     let currentStudent = students[i];
//     //saves currentStudent into the database
//     let saveStudent = await Student.create(currentStudent);
    
//     //creates association between student and campus
//     let campusId = currentStudent.campus; 
//     let campusObject = await Campus.findByPk(campusId);
//     await saveStudent.setCampus(campusObject);
//   }
// }

const populateMessagesTable = async (messages) => {
    for(let i = 0; i < messages.length; i++){
      let currentMessage = messages[i];
      await Message.create(currentMessage);
    }
}

const populateMessageBoardTable = async (messageboards) => {
    for(let i = 0; i < messageboards.length; i++){
      let currentMessageBoard = messageboards[i];
      await MessageBoard.create(currentMessageBoard);
    }
}

const populateMessageBoardCollectionTable = async (messageboardcollection) => {
    for(let i = 0; i < messageboardcollection.length; i++){
      let currentMessageBoardCollection = messageboardcollection[i];
      await MessageBoardCollection.create(currentMessageBoardCollection);
    }
}

const seedDatabase = async () => {
  try {
    await populateMessagesTable(messages);
    await populateMessageBoardTable(messageboards);
    await populateMessageBoardCollectionTable(messageboardcollection);
    console.log("Successfully seeded");
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }

}

module.exports = seedDatabase;
