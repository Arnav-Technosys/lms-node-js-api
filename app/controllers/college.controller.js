const db = require("../models");
const College = db.college;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");

const getAllColleges = async (req, res) => {
  try {
    const clg = await College.findAll({where:{isDeleted:false}});
    res.status(200).send(clg);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addSingleCollege = async (req, res) => {
  try {
    const clg = await College.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addMultipleCollege = async (req, res) => {
  try {
    const clg = await College.bulkCreate(req.body)
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

module.exports = {
  getAllColleges,
  addSingleCollege,
  addMultipleCollege,
};
