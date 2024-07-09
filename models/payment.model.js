module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Students', // name of the target model
        key: 'id',         // key in the target model
      }
    },
  });

  Payment.associate = function(models) {
    Payment.belongsTo(models.Student, { foreignKey: "student_id" });
  };

  return Payment;
};
