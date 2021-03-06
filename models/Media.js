const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema(
  { 
    albumId: { 
      type: String, 
      required: true
    },
    fileLink: { 
      type: String ,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = Media = mongoose.model("media", mediaSchema);
