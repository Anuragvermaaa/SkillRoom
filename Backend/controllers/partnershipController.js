const Partnership = require("../models/partnershipModel");
const { sendPartnershipEmail } = require("../services/emailService");
const { validationResult } = require("express-validator");

exports.submitPartnership = async (req, res) => {
  console.log("Partnership payload:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, phone, message } = req.body;
    const partnership = await Partnership.create({ name, email, phone, message });
    await sendPartnershipEmail({ name, email, phone, message });

    res.status(201).json({
      message: "Partnership inquiry submitted successfully",
      partnership: {
        _id: partnership._id,
        name: partnership.name,
        email: partnership.email,
        phone: partnership.phone,
        message: partnership.message,
      },
    });
  } catch (error) {
    console.error("Partnership error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};