const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "User property must include ID!"],
  },
  firstName: {
    type: String,
    required: [true, "User property must include first name!"],
  },
  lastName: {
    type: String,
    required: [true, "User property must include lastName name!"],
  },
  birthday: {
    type: String,
    required: [true, "User property must include birthday!"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
