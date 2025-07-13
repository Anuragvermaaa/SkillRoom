
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const clientController = require("../controllers/clientController");
const authMiddleware = require("../middlewares/authMiddlewares");

router.post(
  "/register",
  [
    body("firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("lastname")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("contact")
      .isLength({ min: 10, max: 10 })
      .withMessage("Contact must be 10 digits")
      .matches(/^\d{10}$/)
      .withMessage("Contact must be a valid 10-digit number"),
    body("organization")
      .isLength({ min: 3 })
      .withMessage("Organization name must be at least 3 characters long"),
    body("query")
      .isLength({ min: 3 })
      .withMessage("Query must be at least 3 characters"),
  ],
  clientController.registerClient
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  clientController.loginClient
);

router.get("/profile", authMiddleware.authClient, clientController.getClientProfile);

router.get("/logout", authMiddleware.authClient, clientController.logoutClient);

module.exports = router;

