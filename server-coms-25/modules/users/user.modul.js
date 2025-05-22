const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = new model("User", UserSchema)