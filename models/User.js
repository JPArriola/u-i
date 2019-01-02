const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  connectionCode: {
    type: String,
    required: true
  },
  connected: {
    type: Boolean,
    required: true,
    default: false
  },
  nickname: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    required: false
  },
  partnerId: {
    type: Number,
    required: false
  },
  zipCode: {
    type: Number,
    required: false
  }
})

module.exports = User = mongoose.model('users', UserSchema);