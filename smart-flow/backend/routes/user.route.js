import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    const { name, email, role, password } = req.body;

    if (!name || !email || !role || !password) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newUser  = new User({ name, email, role, password });

    try {
        await newUser .save();
        res.status(201).json({ success: true, data: newUser  });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default router;