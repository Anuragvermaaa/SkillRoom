const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const clientModel = require("../models/clientModel");
const blackListTokenModel = require("../models/blackListTokenModel"); // Changed to SkillBlacklistToken

module.exports.forgotAuthUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "") || req.cookies.token;
    console.log("Token received for user auth:", token);
    if (!token) {
      return res.status(401).json({ message: "No token provided [forgot]" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token is blacklisted [forgot]" });
    }

    const decoded = jwt.verify(token, process.env.SKILL_ROOM_JWT_SECRET);
    console.log("Decoded token:", decoded);
    const user = await userModel.findOne({ email: decoded.email });
    console.log("Found user for auth:", user);
    if (!user) {
      return res.status(404).json({ message: "User not found [forgot]" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Forgot auth user error:", error);
    return res.status(401).json({ message: "Invalid token [forgot]" });
  }
};

module.exports.forgotAuthClient = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "") || req.cookies.token;
    console.log("Token received for client auth:", token);
    if (!token) {
      return res.status(401).json({ message: "No token provided [forgot]" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token is blacklisted [forgot]" });
    }

    const decoded = jwt.verify(token, process.env.SKILL_ROOM_JWT_SECRET);
    console.log("Decoded token:", decoded);
    const client = await clientModel.findOne({ email: decoded.email }, "+password");
    console.log("Found client for auth:", client);
    if (!client) {
      return res.status(404).json({ message: "Client not found [forgot]" });
    }
    req.client = client;
    next();
  } catch (error) {
    console.error("Forgot auth client error:", error);
    return res.status(401).json({ message: "Invalid token [forgot]" });
  }
};