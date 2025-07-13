const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { submitPartnership } = require("../controllers/partnershipController");

router.post(
  "/",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("phone").notEmpty().withMessage("Phone number is required"),
    check("message").notEmpty().withMessage("Message is required"),
  ],
  submitPartnership
);

module.exports = router;