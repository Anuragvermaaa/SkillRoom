const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { submitCvSubmission } = require("../controllers/cvSubmissionController");
const { validateCvSubmission } = require("../middlewares/validateCvSubmission");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post(
  "/",
  upload.single("cv"),
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
  ],
  validateCvSubmission,
  submitCvSubmission
);

module.exports = router;