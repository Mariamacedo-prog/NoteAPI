const noteService = require("../services/NoteService");

module.exports = {
  ping: (req, res) => {
    res.json({ pong: true });
  },
};