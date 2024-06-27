
# Student Details API

## Overview
This API service manages student details, payments, and financial status for a school or educational institution. It provides endpoints to retrieve comprehensive information about students enrolled in the institution.

## Features
- **Get All Students**: Endpoint to fetch all student details.
- **Individual Student Details**: Each student is represented as an object containing:
  - **Student Bio Data**: Includes student ID, first name, gender, age, class, physical address, and parent phone number.
  - **Student Payments**: An array of payments received from the student.
  - **Student Status**: Contains information about:
    - Expected school fees.
    - Total amount paid by the student (sum of all payments).
    - Outstanding balance (difference between expected fees and total paid).

## API Endpoints

### Get All Students
Retrieves details of all students enrolled.

### Get Student by ID
Retrieves details of a specific student identified by `student_id`.

## Example Student Object
```json
{
  "student_id": "123",
  "first_name": "John",
  "gender": "Male",
  "age": 15,
  "class": "10th Grade",
  "physical_address": "123 Main St, Cityville",
  "parent_phone_number": "+1234567890",
  "payments": [
    {
      "date": "2024-06-27",
      "amount": 100
    },
    {
      "date": "2024-06-28",
      "amount": 150
    }
  ],
  "status": {
    "school_fees_expected": 1000,
    "paid_amount": 250,
    "outstanding_balance": 750
  }
}
```
      
## Getting Started
# Clone this repository.
Install dependencies using npm install.
Start the server with npm start.
Use API endpoints to retrieve student details.
Technologies Used
Node.js
Express

## Geriga Sunday Drago {Array of Payment, School fees expect}
  -Design the API: Define the endpoint, HTTP method, and data format.
  -Set up your development environment.
  -Create the API endpoint in your code.
  -Implement request handling: Extract and validate payment data from the request.
  -Store the validated payment data in a database.
  -Send a response to confirm the request was successful.
  -Test the API thoroughly using the postman to see if the given functionalities 

## Sample code
