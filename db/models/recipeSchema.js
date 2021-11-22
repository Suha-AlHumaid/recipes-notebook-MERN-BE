const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  ingredients: { type: String, required: true },
  directions: { type: String, required: true },
  extraNote: { type: String },
  isDeleted: { type: Boolean, default: false },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userSchema',
    required: true
 }
},{timestamps: true}
);

module.exports = mongoose.model("recipeSchema", recipeSchema);
