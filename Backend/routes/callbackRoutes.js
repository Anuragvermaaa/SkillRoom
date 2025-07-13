
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { submitCallback } = require("../controllers/callbackController");

router.post(
  "/",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("contact").notEmpty().withMessage("Contact number is required"),
    check("email")
      .optional()
      .isEmail()
      .withMessage("Invalid email address"),
  ],
  submitCallback
);

module.exports = router;
