module.exports = (sequelize, Sequelize) => {
  const TeachingLeaveApp = sequelize.define("teachingLeaveApps", {
    teachingLeaveAppId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empId: {
      type: Sequelize.STRING,
    },
    leaveId: {
      type: Sequelize.INTEGER,
    },
    deptId: {
      type: Sequelize.INTEGER,
    },
    fromDate: {
      type: Sequelize.DATE,
    },
    toDate: {
      type: Sequelize.DATE,
    },
    totalDays: {
      type: Sequelize.STRING,
    },
    reason: {
      type: Sequelize.STRING,
    },
    file: {
      type: Sequelize.STRING,
    },
    loadAdjustedBy1: {
      type: Sequelize.STRING,
    },
    loadAdjustedBy2: {
      type: Sequelize.STRING,
    },
    loadAdjustedBy3: {
      type: Sequelize.STRING,
    },
    statusByAC: {
      type: Sequelize.STRING,
      defaultValue: "Pending",
    },
    statusByHOD: {
      type: Sequelize.STRING,
      defaultValue: "Pending",
    },
    statusByPrincipal: {
      type: Sequelize.STRING,
      defaultValue: "Pending",
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });
  return TeachingLeaveApp;
};
