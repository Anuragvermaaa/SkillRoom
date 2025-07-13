const express = require("express");
const router = express.Router();
const forgotClientController = require("../controllers/forgotClientController");
const forgotPasswordLimiter = require("../utils/forgotPasswordLimiter");
const { forgotAuthClient } = require("../middlewares/forgotAuthMiddleware");

router.post("/forgot-password", forgotPasswordLimiter, forgotClientController.sendOtp);
router.post("/verify-otp", forgotPasswordLimiter, forgotClientController.verifyOtp);
router.post("/reset-password", forgotAuthClient, forgotClientController.resetPassword);

// Fallback for GET requests
router.get("/forgot-password", (req, res) => {
  res.status(405).json({ message: "Method not allowed. Please use POST for forgot password [forgot]" });
});
router.get("/verify-otp", (req, res) => {
  res.status(405).json({ message: "Method not allowed. Please use POST for OTP verification [forgot]" });
});
router.get("/reset-password", (req, res) => {
  res.status(405).json({ message: "Method not allowed. Please use POST for password reset [forgot]" });
});

module.exports = router;