const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Link the booking to a user
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    dates: {
        start: { type: Date, required: true },
        end: { type: Date, required: true },
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending',
    },
});

module.exports = mongoose.model('Booking', bookingSchema);
