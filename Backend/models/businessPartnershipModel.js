const mongoose = require("mongoose");

const businessPartnershipSchema = new mongoose.Schema(
  {
    orgName: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BusinessPartnership", businessPartnershipSchema);