const router = require("express").Router();
const { Message } = require("../database/models");
const { MessageBoard } = require("../database/models");
const { MessageBoardCollection } = require("../database/models");

router.get("/", (req, res, next) => {
  console.log("connected");
  Message.findAll()
    .then(message => res.json(message))
    .catch(err => console.log(err))
});

router.post("/", async function(req, res, next){
  try{
    // console.log(req.query);
    // console.log(Message);
    let message = await Message.create(req.query);
    res.status(201).json (message);
  }
  catch (err){
    next(err);
  }
});

router.get("/messageboard", async (req, res, next) => {
  try{
    // console.log(req.query);
    MessageBoard.findAll()
    .then(messageBoard => res.json(messageBoard))
    .catch(err => console.log(err))
  }
  catch (err){
    next(err);
  }
});

router.post("/messageboard", async function(req, res, next){
  try{
    // console.log(req.query);
    // console.log(MessageBoard);
    let messageBoard = await MessageBoard.create(req.query);
    res.status(201).json (messageBoard);
  }
  catch (err){
    next(err);
  }
});

router.get("/messageboardcollection", async (req, res, next) => {
  try{
    // console.log(req.query);
    MessageBoardCollection.findAll()
    .then(messageBoardCollection => res.json(messageBoardCollection))
    .catch(err => console.log(err))
  }
  catch (err){
    next(err);
  }
});

router.post("/messageboardcollection", async function(req, res, next){
  try{
    // console.log(req.query);
    // console.log(MessageBoard);
    let messageBoardCollection = await MessageBoardCollection.create(req.query);
    res.status(201).json (messageBoardCollection);
  }
  catch (err){
    next(err);
  }
});

module.exports = router;