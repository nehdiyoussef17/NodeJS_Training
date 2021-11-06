const express = require("express");
const router = express.Router();

const bookController = require("../controllers/book.controller");



/**
 * @Path /books/
 */
router.get("/",bookController.getBooks);


/**
 * @Path /books/id
 */
 router.get("/:id",bookController.getBookById);


module.exports = router ;
