const db = require("../models");
const Society = db.society;
const Op = db.Sequelize.Op;

const getSocietyDetails = async (req, res) => {
  let society = await Society.findAll({});
  res.status(200).send(society);
};

const addSociety = async (req, res) => {
  try {
    const society = await Society.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};


module.exports = {
  getSocietyDetails,
  addSociety
};
