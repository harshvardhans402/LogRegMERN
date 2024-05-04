require("dotenv").config();

// import modules
const path = require("path");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const User = require("./models/user");
const bodyParser = require('body-parser');
// initialize constants
const PORT = process.env.PORT;

// initialize express app
const app = express();

// initialize middlewares
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    }
}));

// connecting MongoDB atlas
connectDB();




app.use(bodyParser.json())
app.get('/api/user/name', async (req, res) => {
    const userObjectId = req.query.userObjectId;
    try {
        const user = await User.findById(userObjectId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ name: user.name });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});




app.use("/api/auth", authRoutes);

// start and listen express web server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));