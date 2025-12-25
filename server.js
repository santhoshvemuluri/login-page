const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); // Allows our HTML file to talk to the server

const DUMMY_USER = {
    username: "admin@example.com",
    password: "password123"
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
        res.json({ success: true, message: "Login Successful! Welcome back." });
    } else {
        res.status(401).json({ success: false, message: "Invalid username or password." });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});