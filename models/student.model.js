const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Student = sequelize.define('Student', {
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    class: DataTypes.STRING,
    physical_address: DataTypes.STRING,
    parent_phone_number: DataTypes.STRING,
    expected_fees: DataTypes.FLOAT
  });

  return Student;
};
