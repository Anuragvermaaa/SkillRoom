
const mongoose = require("mongoose");

const callbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true }, // Optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("Callback", callbackSchema);
