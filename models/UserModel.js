const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    max: [30, "Email should be less than 30 characters."],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("userSchema", userSchema);

module.exports = User;
