module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    "roles",
    {
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      roleName: {
        type: Sequelize.STRING,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
    }
  );
  return Role;
};
