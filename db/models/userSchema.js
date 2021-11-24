const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  publishedRecpie: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipeSchema'
 }]
},
{timestamps: true});

module.exports = mongoose.model("userSchema", userSchema);
