module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    "students",
    {
      studId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      isDeleted:{
         type:Sequelize.BOOLEAN,
         defaultValue:false
      }
    }
  );
  return Student;
};
