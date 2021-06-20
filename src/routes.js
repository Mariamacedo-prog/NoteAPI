const express = require("express");
const router = express.Router();
const noteController = require("./controllers/NoteController");

router.get("/ping", noteController.ping);

module.exports = router;
