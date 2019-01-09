const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  connectionCode: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
});

module.exports = Album = mongoose.model('albums', AlbumSchema);