// routes/student.routes.js
module.exports = app => {
    const student_controller = require("../controllers/student.controller.js");

    const router = require("express").Router();

    // Retrieve all Students
    router.get("/getAllStudents", student_controller.getAllStudents);

    app.use('/api/students', router);
};
// http://localhost/8080/api/students