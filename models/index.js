// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require('./student.model.js')(sequelize, DataTypes);
// db.Payment = require('./payment.model.js')(sequelize, DataTypes);

//db.Student.hasMany(db.Payment, { foreignKey: 'student_id' });
//db.Payment.belongsTo(db.Student, { foreignKey: 'student_id' });

module.exports = db;
