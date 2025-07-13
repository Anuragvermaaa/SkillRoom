const express = require("express");
const router = express.Router();
const forgotUserController = require("../controllers/forgotUserController");
const forgotPasswordLimiter = require("../utils/forgotPasswordLimiter");
const { forgotAuthUser } = require("../middlewares/forgotAuthMiddleware");

router.post("/forgot-password", forgotPasswordLimiter, forgotUserController.sendOtp);
router.post("/verify-otp", forgotPasswordLimiter, forgotUserController.verifyOtp);
router.post("/reset-password", forgotAuthUser, forgotUserController.resetPassword);

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


