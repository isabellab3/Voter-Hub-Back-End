const router = require("express").Router();

const booksRouter = require("./books");
const messagesRouter = require("./messages")

router.use("/books", booksRouter);
router.use("/messages", messagesRouter);

module.exports = router;