module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employees", {
    empId: {
      type: Sequelize.STRING,
      primaryKey: true,
      // autoIncrement: true,
    },
    collegeId: {
      type: Sequelize.INTEGER,
    },
    deptId: {
      type: Sequelize.INTEGER,
    },
    roleId: {
      type: Sequelize.INTEGER,
    },
    empName: {
      type: Sequelize.STRING,
    },
    empContact: {
      type: Sequelize.STRING,
    },
    empEmail: {
      type: Sequelize.STRING,
    },
    empAddress: {
      type: Sequelize.STRING,
    },
    joiningDate: {
      type: Sequelize.DATE,
    },
    pass: {
      type: Sequelize.STRING,
    },
    empImage: {
      type: Sequelize.STRING,
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    accountStatus: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return Employee;
};
