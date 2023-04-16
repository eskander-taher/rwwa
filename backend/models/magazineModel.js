const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const magazineSchema = new Schema(
  {
    versionNum: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Magazine", magazineSchema);
