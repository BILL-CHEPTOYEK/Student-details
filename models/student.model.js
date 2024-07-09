module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physical_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Student.associate = function(models) {
    Student.hasMany(models.Payment, { as: "Payments", foreignKey: "student_id" });
    Student.hasOne(models.Finance, { as: "Finance", foreignKey: "student_id" });
  };

  return Student;
};
