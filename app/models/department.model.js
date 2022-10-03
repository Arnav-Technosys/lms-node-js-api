module.exports = (sequelize, Sequelize) => {
  const Department = sequelize.define(
    "departments",
    {
      deptId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      collegeId: {
        type: Sequelize.INTEGER,
      },
      deptName: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
    }
  );
  return Department;
};
