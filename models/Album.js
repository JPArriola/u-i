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
  connectionCode: {
    type: String,
    required: true
  }
});

module.exports = Album = mongoose.model('albums', AlbumSchema);