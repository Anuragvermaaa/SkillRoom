
const clientModel = require("../models/clientModel");
const BlacklistTokenModel = require("../models/blackListTokenModel");
const { validationResult } = require("express-validator");

module.exports.registerClient = async (req, res) => {
  console.log("Register client request:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array().map(err => err.msg) });
  }

  const { firstname, lastname, contact, email, organization, query, password } = req.body;
  const fullname = { firstname, lastname };

  try {
    const existingClient = await clientModel.findOne({ email });
    if (existingClient) {
      console.log("Client already exists:", email);
      return res.status(400).json({ message: "Business email already exists" });
    }

    const hashedPassword = await clientModel.hashPassword(password);
    console.log("Password hashed for:", email);

    const client = await clientModel.create({
      fullname,
      contact,
      email,
      organization,
      query,
      password: hashedPassword,
      type: "business",
    });

    const token = client.generateAuthToken();
    console.log("Client registered, token generated:", client._id);

    res.status(201).json({
      message: "Business signup successful",
      token,
      client: {
        _id: client._id,
        fullname: client.fullname,
        email: client.email,
        contact: client.contact,
        organization: client.organization,
        query: client.query,
        type: "business",
      },
    });
  } catch (error) {
    console.error("Register client error:", error.message);
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

module.exports.loginClient = async (req, res) => {
  console.log("Login client request:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array().map(err => err.msg) });
  }

  const { email, password } = req.body;

  try {
    const client = await clientModel.findOne({ email }).select("+password");
    if (!client) {
      console.log("Client not found:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await client.comparePassword(password);
    if (!isMatch) {
      console.log("Password mismatch for:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = client.generateAuthToken();
    console.log("Client logged in, token generated:", client._id);

    res.status(200).json({
      message: "Business login successful",
      token,
      client: {
        _id: client._id,
        fullname: client.fullname,
        email: client.email,
        contact: client.contact,
        organization: client.organization,
        query: client.query,
        type: "business",
      },
    });
  } catch (error) {
    console.error("Login client error:", error.message);
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

module.exports.getClientProfile = async (req, res) => {
  console.log("Fetching profile for client:", req.client._id);
  try {
    res.status(200).json({
      client: {
        _id: req.client._id,
        fullname: req.client.fullname,
        email: req.client.email,
        contact: req.client.contact,
        organization: req.client.organization,
        query: req.client.query,
        type: "business",
      },
    });
  } catch (error) {
    console.error("Get client profile error:", error.message);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

module.exports.logoutClient = async (req, res) => {
  console.log("Logout client request");
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      await BlacklistTokenModel.create({ token });
      console.log("Token blacklisted for logout");
    }
    res.status(200).json({ message: "Business logged out successfully" });
  } catch (error) {
    console.error("Logout client error:", error.message);
    res.status(500).json({ message: "Server error during logout" });
  }
};