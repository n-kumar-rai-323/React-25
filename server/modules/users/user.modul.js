const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    isBlocked: { type: Boolean, required: true, default: false },
    roles: {type:[String], enum:["admin", "user"], default:["user"]}
  },
  {
    timestamps: true,
  }
);

module.exports = new model("User", UserSchema);
