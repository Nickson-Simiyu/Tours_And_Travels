const express = require('express');
const auth = require('./middleware/auth');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');



dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/booking', bookingRoutes);

app.get('/api/profile', auth, (req, res) => {
    res.json({ msg: 'Access granted to profile', user: req.user });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
