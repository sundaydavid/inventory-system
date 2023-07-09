const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean
    },
  },
  { timestamp: true }
);

const Users = mongoose.model("users", UserSchema);
module.exports = Users;
