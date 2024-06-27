// controllers/student.controller.js
const db = require('../models');
const Student = db.Student;
const Payment = db.Payment;

exports.getAllStudents = (req, res) => {
    Student.findAll({
        include: [Payment]
    })
        .then(data => {
            res.send({
                status: "Success",
                status_code: 1000,
                message: "Students successfully retrieved",
                number_of_students: data.length,
                results: data
            });
        })
        .catch(err => {
            res.send({
                status: "Error",
                status_code: 1001,
                message: err.message || "Error occurred while retrieving Students"
            });
        });
};
