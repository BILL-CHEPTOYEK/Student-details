const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const studentPayment = sequelize.define('Payment', {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: DataTypes.FLOAT,
    payment_date: DataTypes.DATE,
  });

  return studentPayment;
};
