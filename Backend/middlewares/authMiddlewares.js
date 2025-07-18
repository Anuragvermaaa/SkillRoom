

const userModel = require("../models/userModel");
const clientModel = require("../models/clientModel");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListTokenModel");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SKILL_ROOM_JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authClient = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlacklisted = await blackListTokenModel.findOne({ token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SKILL_ROOM_JWT_SECRET);
    const client = await clientModel.findById(decoded._id);
    if (!client) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.client = client;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};


