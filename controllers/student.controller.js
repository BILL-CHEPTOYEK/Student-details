// controllers/student.controller.js
const db = require('../models');
const Student = db.Student;
const Payment = db.Payment;


//search all students
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

//make payment
exports.makePayment = async (req, res) => {
    const {student_id, amount, payment_date } = req.body;
    if (!amount || !payment_date) {
        return res.status(400).json({ error: 'All fields required' });
    }

    try {
        const student = await Student.findByPk(student_id);

        if (!student) {
            res.status(404).json({ error: 'Student not found' });
        }

        const newPayment = await Payment.create({
            student_id,
            amount,
            payment_date
        });

        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

//student outstanding status
exports.getStudentStatus = async (req, res) => {
    const student_id = req.params.student_id;  // Corrected variable name

    try {
        const student = await Student.findByPk(student_id, {
            include: [Payment]
        });

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        const paidAmount = student.Payments.reduce((sum, payment) => sum + payment.amount, 0);
        const outstandingBalance = student.expected_fees - paidAmount;

        const status = {
            expected_fees: student.expected_fees,
            paid_amount: paidAmount,
            outstanding_balance: outstandingBalance
        };

        res.json(status);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

//Retrieve an array of all possible payments made and their total
exports.PaymentReceived = async (req, res) => {
  try {
      const students = await Student.findAll({
          include: [Payment]
      });

      const studentsStatus = students.map(student => {
          return {
              student_id: student.student_id,
              student_name: student.first_name,
              payments: student.Payments.map(payment => ({
                  amount: payment.amount,
                  date: payment.payment_date
              }))
          };
      });

      const totalPayments = students.reduce((total, student) => 
          total + student.Payments.reduce((sum, payment) => sum + payment.amount, 0), 0
      );

      res.json({ studentsStatus, totalPayments });
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
};

//Getting the expected school fees
exports.ExpectedSchoolFees = async (req, res) => {
  try {
      const students = await Student.findAll({
          include: [Payment]
      });

      const studentsStatus = students.map(student => {
          const paidAmount = student.Payments.reduce((sum, payment) => sum + payment.amount, 0);
          const outstandingBalance = student.expected_fees - paidAmount;

          return {
              student_id: student.id,
              expected_fees: student.expected_fees,
              paid_amount: paidAmount,
              outstanding_balance: outstandingBalance
          };
      });

      const totalExpectedFees = students.reduce((total, student) => total + student.expected_fees, 0);

      res.json({ studentsStatus, totalExpectedFees });
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
};

