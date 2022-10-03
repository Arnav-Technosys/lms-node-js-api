module.exports = (sequelize, Sequelize) => {
  const Director = sequelize.define(
    "directors",
    {
      dId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      pass: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      accountStatus:{
        type: Sequelize.BOOLEAN,
        defaultValue:true
      }
    }
  );
  return Director;
};
