const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { submitBusinessPartnership } = require("../controllers/businessPartnershipController");

router.post(
  "/",
  [
    check("orgName").notEmpty().withMessage("Organization name is required"),
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("message").notEmpty().withMessage("Message is required"),
  ],
  submitBusinessPartnership
);

module.exports = router;