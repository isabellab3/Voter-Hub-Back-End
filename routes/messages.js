const router = require("express").Router();
const { Message } = require("../database/models");
const { MessageBoard } = require("../database/models");

router.get("/", (req, res, next) => {
  console.log("connected")
  Message.findAll()
    .then(message => res.json(message))
    .catch(err => console.log(err))
})

router.get("/user", async (req, res, next) => {
  try {
    // console.log("req.user is???", req.user)
    let user = await User.findAll()
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})

router.put("/user/:email", async (req, res, next) => {
  try {
    //  UPDATE students SET "col1" = 'val1', "col2" = 'val2' WHERE id = req.params.id
    console.log(req.params.email)
    let updatedUser = await User.update(req.body, {
      where: { email: req.params.email },
      returning: true,
      plain: true
    })
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

router.post("/", async function(req, res, next) {
  try {
    //change query to body later
    let message = await Message.create(req.body)

    //association between message and messageboard
    let messageBoardObject = await MessageBoard.findByPk(message.messageBoardID)
    // console.log(messageBoardObject.dataValues);
    await message.setMessageboard(messageBoardObject)
    res.status(201).json(message)
  } catch (err) {
    next(err)
  }
})

//not sure if this works
router.delete("/", async function(req, res, next) {
  try {
    console.log(req.body)
    await Message.destroy({
      where: { id: req.body.id }
    })
    res.send("success")
  } catch (err) {
    next(err)
  }
})

router.get("/messageboard", async (req, res, next) => {
  try {
    // console.log(req.query);
    MessageBoard.findAll({ include: [Message] })
      .then(messageBoard => res.json(messageBoard))
      .catch(err => console.log(err))
  } catch (err) {
    next(err)
  }
})

router.get("/messageboard/:officialId", async (req, res, next) => {
  try{
    console.log('DATA:', req.params.officialId);
    MessageBoard.findAll({ 
      /* include:[Message],  */    
      where: { officialId: req.params.officialId },
      // order: '"updatedAt" DESC'    
      // sort: [updatedAt, descending]
    })
      .then(messageBoard => res.json(messageBoard))
      .catch(err => console.log(err))
  } catch (err) {
    next(err)
  }
})

router.get("/messageboard/thread/:messagesId", async (req, res, next) => {
  try {
    // console.log(req.query);
    MessageBoard.findOne({
      include: [Message],
      where: { id: req.params.messagesId }
      // order: '"updatedAt" DESC'
      // sort: [updatedAt, descending]
    })
      .then(thread => res.json(thread))
      .catch(err => console.log(err))
  } catch (err) {
    next(err)
  }
})


router.post("/messageboard", async function(req, res, next){
  try{
    console.log('akslhdfhasdklfhaslkdfhasldfkjhasdlfhjasdkjlf', req.body)

  const newThread = req.body.threadInfo;
  const newMessage= req.body.messageInfo;

     let T = await MessageBoard.create(newThread);
     const id = T.id

    newMessage["messageBoardID"] = id
    console.log(newMessage, "hello")
    const message = await Message.create(newMessage)
    //console.log(message)
    //let message = await Message.create.create()
    res.status(201).json(T)
  } catch (err) {
    next(err)
  }
});


/* 
router.get("/messageboardcollection", async (req, res, next) => {
  try {
    // console.log(req.query);
    MessageBoardCollection.findAll({ include: [MessageBoard] })
      .then(messageBoardCollection => res.json(messageBoardCollection))
      .catch(err => console.log(err))
  } catch (err) {
    next(err)
  }
  catch (err){
    next(err);
  }
}); */
/* 
router.post("/messageboardcollection", async function(req, res, next){
  try{
    // console.log(req.query);
    // console.log(MessageBoard);
    let messageBoardCollection = await MessageBoardCollection.create(req.query)
    res.status(201).json(messageBoardCollection)
  } catch (err) {
    next(err)
  }
});
 */
module.exports = router;
