const express = require("express");
const router = express.Router();

const Hall = require("../models/Hall");

// Get all halls
router.get("/", async (req, res) => {
    try {
        const halls = await Hall.find();
        res.json(halls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new hall
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const hall = new Hall(req.body);
        await hall.save();

        res.status(201).json({
            message: "Hall Added Successfully",
            hall
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;