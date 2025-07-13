const BusinessPartnership = require("../models/businessPartnershipModel");
const { sendBusinessPartnershipEmail } = require("../services/emailService");
const { validationResult } = require("express-validator");

exports.submitBusinessPartnership = async (req, res) => {
  console.log("Business Partnership payload:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { orgName, name, email, message } = req.body;
    const businessPartnership = await BusinessPartnership.create({
      orgName,
      name,
      email,
      message,
    });
    await sendBusinessPartnershipEmail({ orgName, name, email, message });

    res.status(201).json({
      message: "Business partnership inquiry submitted successfully",
      businessPartnership: {
        _id: businessPartnership._id,
        orgName: businessPartnership.orgName,
        name: businessPartnership.name,
        email: businessPartnership.email,
        message: businessPartnership.message,
      },
    });
  } catch (error) {
    console.error("Business Partnership error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};