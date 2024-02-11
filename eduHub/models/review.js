const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Review = new Schema ({
  message: {type: String},
  class: {type: Schema.Types.ObjectId},
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model("Review", Review);