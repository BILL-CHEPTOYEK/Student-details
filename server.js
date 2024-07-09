// server.js

// Import modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Importing models
const db = require("./models");

// API Routes
app.get("/n", (req, res) => {
    res.json({
        status: "Success",
        status_code: 100,
        message: "Welcome to Student-details API"
    });
});

app.post("/data", (req, res) => {
    const data = req.body.data_r;
    if (!data) {
        res.json({
            status: "Error",
            status_code: 101,
            message: "No data is available",
        });
    } else {
        res.json({
            status: "Success",
            status_code: 100,
            message: "Welcome to Student-details API",
            data: `Result - ${data}`
        });
    }
});

// Import student routes
require("./routes/student.routes")(app);

// Define port for project
const PORT = 7001;

// Monitor when server starts
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
