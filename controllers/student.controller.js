// controllers/student.controller.js
const db = require('../models');
const Student = db.Student;
const Payment = db.Payment;
const Finance = db.Finance;

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [
        { model: Payment, as: 'Payments' },
        { model: Finance, as: 'Finance' }
      ]
    });
      
    //status for each student
    const studentsStatus = students.map(student => {
      const paidAmount = student.Payments.reduce((sum, payment) => sum + payment.amount, 0);
      const outstandingBalance = student.Finance.expected_fees - paidAmount;
      

      return {
        student_id: student.id,
        first_name: student.first_name,
        gender: student.gender,
        age: student.age,
        class: student.class,
        physical_address: student.physical_address,
        parent_phone_number: student.parent_phone_number,
        payments: student.Payments.map(payment => ({
          amount: payment.amount,
          date: payment.payment_date
        })),
        status: {
          expected_fees: student.Finance.expected_fees,
          paid_amount: paidAmount,
          outstanding_balance: outstandingBalance
        }
      };
    });
       //total outstanding balance 
    const totalOutstandingBalances = studentsStatus.reduce((total, student) => total + student.status.outstanding_balance, 0);
    //total payment for all students
    const totalPayments = students.reduce((total, student) => 
      total + student.Payments.reduce((sum, payment) => sum + payment.amount, 0), 0
    );

    //total expected_fees 
    const totalExpectedFees = students.reduce((total, student) => total + student.Finance.expected_fees, 0);
    res.json({
      status: "Success",
      status_code: 1000,
      message: "Students successfully retrieved",
      number_of_students: students.length,
      studentsStatus: studentsStatus,
      totalOutstandingBalances: totalOutstandingBalances,
      totalPayments: totalPayments,
      totalExpectedFees: totalExpectedFees
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
