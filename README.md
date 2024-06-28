# Student Details API

## Overview

This API service manages student details, payments, and financial status for a school or educational institution. It provides endpoints to retrieve comprehensive information about students enrolled in the institution.

## Features

Retrieve all student details.
Each student is represented as an object containing bio data, payments, and status.
Comprehensive information about student school fees, including expected fees, paid amount, and outstanding balance.

## Endpoints

Get All Students Details
 Endpoint: /students
 Method: GET
 Description: Retrieve details of all students. Each student is represented as an object containing bio data, payments, and status.

## Student Object Structure

## Student Bio Data

student_id: Unique identifier for the student.
first_name: First name of the student.
gender: Gender of the student.
age: Age of the student.
class: Class/grade of the student.
physical_address: Physical address of the student.
parent_phone_number: Contact phone number of the student's parent or guardian.

## Student Payments

payments: List of payments received. Each payment contains:
     payment_id: Unique identifier for the payment.
     amount: Amount paid.
     date: Date of payment.

## Student Status

status: Status of the student's school fees.
expected_fee: Expected amount of school fees.
paid_amount: Total amount paid by the student (sum of all payments).
outstanding_balance: Outstanding balance (expected fee - paid amount).

## Database Configuration

Ensure your database is configured correctly to store and retrieve student data. The student table should include fields for student bio data, payments, and status.

## Dependencies

Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
Mysql: Mysql database for storing student data.

## Installation

Clone the Repository
 git clone https://github.com/BILL-CHEPTOYEK/Student-details.git
Install Dependencies
  cd student-details-api
  npm install

## Run the Application

npm start

## License

This project is licensed under the MIT License.

## Authors

Drago
Atong
Bill
Benard
