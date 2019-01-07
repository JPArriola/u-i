const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StickySchema = new Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
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

module.exports = Sticky = mongoose.model('stickys', StickySchema);