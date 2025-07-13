
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const clientSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  contact: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Contact must be a 10-digit number"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Invalid email"],
  },
  organization: {
    type: String,
    required: true,
    minlength: [3, "Organization must be at least 3 characters long"],
  },
  query: {
    type: String,
    required: true,
    minlength: [3, "Query must be at least 3 characters"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    select: false,
  },
  type: {
    type: String,
    default: "business",
  },
  otp: { type: String },
  otpExpires: { type: Date },
});

clientSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SKILL_ROOM_JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

clientSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

clientSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

module.exports = mongoose.model("Client", clientSchema);