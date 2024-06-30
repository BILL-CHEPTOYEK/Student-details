// routes/student.routes.js
module.exports = app => {
    const student_controller = require("../controllers/student.controller.js");

    const router = require("express").Router();

   
    // Retrieve all Students
    //http://localhost/8080/api/getAllStudents
    router.get("/getAllStudents", student_controller.getAllStudents);
    
    //make payment
    //http://localhost/8080/api/students/makePayment
    router.post("/makePayment", student_controller.makePayment);

    //Retrieve total payment

    //retrieve students status
    //http://localhost/8080/api/students
    router.get("/getStudentStatus/:student_id/status", student_controller.getStudentStatus);

    app.use('/api/students', router);
};
// http://localhost/8080/api/students