const router = require("express").Router();
const { Message } = require("../database/models");

router.get("/", (req, res, next) => {
  console.log("connected");
  Message.findAll()
    .then(message => res.json(message))
    .catch(err => console.log(err))
});

router.post("/", async function(req, res, next){
  try{
    console.log(req.query);
    console.log(Message);
    let message = await Message.create(req.query);
    res.status(201).json (message);
  }
  catch (err){
    next(err);
  }
});


module.exports = router;