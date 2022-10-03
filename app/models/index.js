const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./student.model.js")(sequelize, Sequelize);
db.society = require("./society.model.js")(sequelize, Sequelize);
db.superAdmin = require("./superAdmin.model")(sequelize, Sequelize);
db.director = require("./director.model")(sequelize, Sequelize);
db.admin = require("./admin.model")(sequelize, Sequelize);
db.college = require("./college.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.department = require("./department.model")(sequelize, Sequelize);
db.employee = require("./employee.model")(sequelize, Sequelize);
db.leave = require("./leave.model")(sequelize, Sequelize);
db.nonTeachingLeaveApp = require("./nonTeachingLeaveApp.model")(
  sequelize,
  Sequelize
);
db.teachingLeaveApp = require("./teachingLeaveApp.model")(sequelize, Sequelize);
db.hodLeaveApp = require("./hodLeaveApp.model")(sequelize, Sequelize);
db.principalLeaveApp = require("./principalLeaveApp.model")(
  sequelize,
  Sequelize
);

// db.role.hasMany(db.employee);
// db.employee.belongsTo(db.role);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;
