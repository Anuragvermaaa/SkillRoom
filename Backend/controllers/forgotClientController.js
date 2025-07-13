const clientModel = require("../models/clientModel");
const forgotMailer = require("../utils/forgotMailer");
const forgotOtpGenerator = require("../utils/forgotOtpGenerator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Received email for OTP:", email);
    if (!email) return res.status(400).json({ message: "Email is required [forgot]" });
    const client = await clientModel.findOne({ email: { $regex: `^${email}$`, $options: "i" } }, "+password");
    console.log("Found client:", client);
    if (!client) return res.status(404).json({ message: "Client not found [forgot]" });
    const otp = forgotOtpGenerator();
    await forgotMailer(email, otp);
    client.otp = otp;
    client.otpExpires = Date.now() + 10 * 60 * 1000;
    await client.save();
    res.status(200).json({ message: "OTP sent to your email [forgot]" });
  } catch (error) {
    console.error("Send OTP error:", error);
    res.status(500).json({ message: "Failed to send OTP [forgot]" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    console.log("Verifying OTP for email:", email, "OTP:", otp);
    if (!otp) return res.status(400).json({ message: "OTP is required [forgot]" });
    if (!email) return res.status(400).json({ message: "Email is required [forgot]" });
    const client = await clientModel.findOne({ 
      email: { $regex: `^${email}$`, $options: "i" },
      otp,
      otpExpires: { $gt: Date.now() }
    }, "+password");
    console.log("Found client for OTP verification:", client);
    if (!client) return res.status(400).json({ message: "Invalid or expired OTP [forgot]" });
    const token = jwt.sign({ email: client.email }, process.env.SKILL_ROOM_JWT_SECRET, { expiresIn: "1h" });
    client.otp = undefined;
    client.otpExpires = undefined;
    await client.save();
    res.status(200).json({ message: "OTP verified [forgot]", token });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ message: "Failed to verify OTP [forgot]" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    console.log("Resetting password for client:", req.client.email);
    if (!password) return res.status(400).json({ message: "Password is required [forgot]" });
    if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters long [forgot]" });
    const client = req.client;
    const hashedPassword = await bcrypt.hash(password, 10);
    client.password = hashedPassword;
    await client.save();
    res.status(200).json({ message: "Password reset successfully [forgot]" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ message: "Failed to reset password [forgot]" });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
  resetPassword,
};



