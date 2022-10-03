const db = require("../models");
const Leave = db.leave;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");

const getAllLeaves = async (req, res) => {
  try {
    const result = await Leave.findAll({where:{isDeleted:false}});
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addLeave = async (req, res) => {
  try {
    const sa = await Leave.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const updateLeave = async (req, res) => {
  try {
    const sa = await Leave.update(req.body,{where:{leaveId:req.body.leaveId}});
    res.status(200).send({ success: "Records updated successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const deleteLeave = async (req, res) => {
  try {
    const sa = await Leave.update({ isDeleted: true },{ where: { leaveId: req.params.id } });
    res.status(200).send({ success: "Records deleted successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

module.exports = {
  getAllLeaves,
  addLeave,
  updateLeave,
  deleteLeave
};
