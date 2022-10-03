module.exports = (sequelize, Sequelize) => {
  const College = sequelize.define(
    "colleges",
    {
      collegeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      collegeName: {
        type: Sequelize.STRING,
      },
      collegeType: {
        type: Sequelize.STRING,
      },
      collegeUnit: {
        type: Sequelize.STRING,
      },
      collegeEmail: {
        type: Sequelize.STRING,
      },
      collegeContact: {
        type: Sequelize.STRING,
      },
      collegeAddress: {
        type: Sequelize.STRING,
      },
      collegeFax: {
        type: Sequelize.STRING,
      },
      collegeLogo: {
        type: Sequelize.STRING,
      },
      collegeImage: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
    }
  );
  return College;
};
