// routes/student.routes.js

module.exports = app => {
    const studentController = require("../controllers/student.controller.js");

    const router = require("express").Router();

    router.get('/getstudents', studentController.getAllStudents);

    app.use('/api/students', router);
};
