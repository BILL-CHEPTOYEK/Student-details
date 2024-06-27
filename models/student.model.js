// models/student.model.js
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        student_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        class: { type: DataTypes.STRING },
        age: {
            type: DataTypes.INTEGER,
            validate: {
                min: 10
            }
        },
        parent_phone_number: { type: DataTypes.INTEGER, allowNull: true },
        gender: { type: DataTypes.STRING, allowNull: false },
        physical_address: { type: DataTypes.STRING, defaultValue: 'Kampala' },
        category: { type: DataTypes.ENUM, values: ['DAY', 'BOARDING'] },
        status: { type: DataTypes.BOOLEAN, defaultValue: true }
    },
        {
            defaultScope: {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        });

    return Student;
};
