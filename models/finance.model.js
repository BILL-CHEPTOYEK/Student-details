module.exports = (sequelize, DataTypes) => {
    const Finance = sequelize.define("Finance", {
      expected_fees_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      expected_fees: {
        type: DataTypes.INTEGER,
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
  
    Finance.associate = function(models) {
      Finance.belongsTo(models.Student, { foreignKey: "student_id" });
    };
  
    return Finance;
  };
  