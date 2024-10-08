const express = require('express');
const auth = require('../middleware/auth');  // Import JWT auth middleware
const Booking = require('../models/Booking');  // Import the booking model
const router = express.Router();

// Create a new booking
router.post('/create', auth, async (req, res) => {
    const { destination, dates } = req.body;
    try {
        const booking = new Booking({
        user: req.user.id,  // `req.user` is populated by the auth middleware
        destination,
        dates,
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all bookings for the logged-in user
router.get('/my-bookings', auth, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id });
        res.json(bookings);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
