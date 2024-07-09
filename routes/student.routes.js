// routes/student.routes.js

module.exports = app => {
    const studentController = require("../controllers/student.controller.js");

    const router = require("express").Router();

    //http://localhost:7001/api/students/getstudents
    router.get('/getstudents', studentController.getAllStudents);

    app.use('/api/students', router);
};
