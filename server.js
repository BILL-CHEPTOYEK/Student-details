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

// Synchronize the database
db.sequelize.sync({ force: false }).then(() => {
    console.log("DB synchronized");
}).catch(err => {
    console.error("Failed to synchronize DB: ", err.message);
});

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
const PORT = 8080;

// Monitor when server starts
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
