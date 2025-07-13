

const User = require("../models/userModel");
const BlacklistTokenModel = require("../models/blackListTokenModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateToken = (id, email, contact, type) => {
  if (!process.env.SKILL_ROOM_JWT_SECRET) {
    console.error("JWT_SECRET is not defined in environment variables");
    throw new Error("Server configuration error");
  }
  return jwt.sign({ id, email, contact, type }, process.env.SKILL_ROOM_JWT_SECRET, {
    expiresIn: "30d",
  });
};

exports.registerUser = async (req, res) => {
  console.log("Register payload:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, contact, password, confirmPassword } = req.body;
    if (!fullname?.firstname || !fullname?.lastname || !email || !contact || !password || !confirmPassword) {
      return res.status(400).json({ errors: [{ msg: "All fields are required" }] });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ errors: [{ msg: "Passwords do not match" }] });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email: email.toLowerCase(),
      contact,
      password: hashedPassword,
      type: "user",
    });

    res.status(201).json({
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        contact: newUser.contact,
        type: newUser.type,
      },
      token: generateToken(newUser._id, newUser.email, newUser.contact, newUser.type),
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.loginUser = async (req, res) => {
  console.log("Login payload:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ errors: [{ msg: "All fields are required" }] });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    console.log("User found:", { email: user.email, password: user.password });
    if (!user.password) {
      console.error("User password is undefined in database");
      return res.status(500).json({ errors: [{ msg: "Server error: Invalid user data" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    res.status(200).json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        contact: user.contact,
        type: user.type,
      },
      token: generateToken(user._id, user.email, user.contact, user.type),
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        contact: user.contact,
        type: user.type,
      },
    });
  } catch (error) {
    console.error("Profile error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    await BlacklistTokenModel.create({ token });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

