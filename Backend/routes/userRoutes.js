const express = require("express");
const router = express.Router();

const User = require("../models/User");

// ======================
// REGISTER USER
// ======================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      phone
    });

    await user.save();

    res.status(201).json({
      message: "User Registered Successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// ======================
// LOGIN USER
// ======================
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// ======================
// GET ALL USERS
// ======================
router.get("/", async (req, res) => {
  try {

    const users = await User.find();

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;