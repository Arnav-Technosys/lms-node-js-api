module.exports = (sequelize, Sequelize) => {
  const Director = sequelize.define(
    "leaves",
    {
      leaveId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      leaveName: {
        type: Sequelize.STRING,
      },
      maxLeavePerMonth: {
        type: Sequelize.STRING,
      },
      totalLeave: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
    }
  );
  return Director;
};
