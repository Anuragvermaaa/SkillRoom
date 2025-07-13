

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { registerUser, loginUser, getCurrentUser, logoutUser } = require("../controllers/userController");
const { authUser } = require("../middlewares/authMiddlewares"); // Fixed import for authUser

router.post(
  "/register",
  [
    check("fullname.firstname").notEmpty().isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
    check("fullname.lastname").notEmpty().isLength({ min: 3 }).withMessage("Last name must be at least 3 characters"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("contact").notEmpty().withMessage("Contact number is required"),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    check("confirmPassword").notEmpty().withMessage("Confirm password is required"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Invalid email address"),
    check("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

router.get("/profile", authUser, getCurrentUser);
router.get("/logout", authUser, logoutUser);

module.exports = router;

