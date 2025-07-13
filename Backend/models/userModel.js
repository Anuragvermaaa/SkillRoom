
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    email: { 
      type: String, 
      required: true, 
      unique: true,
      lowercase: true,
      trim: true
    },
    contact: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, default: "user" },
    otp: { type: String },
    otpExpires: { type: Date },
  },
  { 
    timestamps: true,
    collation: { locale: 'en', strength: 2 }
  }
);

module.exports = mongoose.model("User", userSchema);