const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StickySchema = new Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  authorId: {
    type: String,
    required: true
  },
  receiverId: {
    type: String,
    required: true
  },
  connectionCode: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model('sticky', StickySchema);