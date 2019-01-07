const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema(
  { 
    albumId: { 
      type: Number, 
      required: true
    },
    fileLink: { 
      type: String 
    },
    s3_key: { 
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = Media = mongoose.model("media", mediaSchema);
