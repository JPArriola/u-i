const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
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
  connectionCode: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model('event', EventSchema);