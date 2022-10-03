module.exports = (sequelize, Sequelize) => {
  const Society = sequelize.define(
    "societies",
    {
      societyId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      societyName: {
        type: Sequelize.STRING,
      },
      societyEmail: {
        type: Sequelize.STRING,
      },
      societyContact: {
        type: Sequelize.STRING,
      },
      societyAddress: {
        type: Sequelize.STRING,
      }
    }
  );
  return Society;
};
