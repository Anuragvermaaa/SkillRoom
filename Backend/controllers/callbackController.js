
const Callback = require("../models/callbackModel");
const { sendCallbackEmail } = require("../services/emailService");
const { validationResult } = require("express-validator");

exports.submitCallback = async (req, res) => {
  console.log("Callback payload:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, contact, email } = req.body;
    const callback = await Callback.create({ name, contact, email });
    await sendCallbackEmail({ name, contact, email });

    res.status(201).json({
      message: "Callback request submitted successfully",
      callback: {
        _id: callback._id,
        name: callback.name,
        contact: callback.contact,
        email: callback.email,
      },
    });
  } catch (error) {
    console.error("Callback error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
