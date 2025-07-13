const mongoose = require("mongoose");

const forgotClientSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    otp: { type: String }, // [forgot] OTP for password reset
    otpExpiry: { type: Date }, // [forgot] OTP expiry
    googleId: { type: String }, // [forgot] Google OAuth ID
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForgotClient", forgotClientSchema);