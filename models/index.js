const dbConfig = require('../config/db.config.js');
const Sequelize = require("sequelize");

const sequelize_config = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize_config.authenticate().then(
    () => console.log('DB connection has been established successfully.')
).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize_config = sequelize_config;

db.Student = require("./student.model.js")(sequelize_config, Sequelize);
db.Payment = require("./payment.model.js")(sequelize_config, Sequelize);
db.Finance = require("./finance.model.js")(sequelize_config, Sequelize);

db.Payment.belongsTo(db.Student, { foreignKey: 'student_id' });
db.Student.hasMany(db.Payment, { foreignKey: 'student_id' });

db.Finance.belongsTo(db.Student, { foreignKey: 'student_id' });
db.Student.hasOne(db.Finance, { foreignKey: 'student_id' });

sequelize_config.sync()
    .then(() => {
        console.log("Tables have been created.");
    }).catch((error) => {
        console.error("Error creating tables: ", error);
    });

module.exports = db;
