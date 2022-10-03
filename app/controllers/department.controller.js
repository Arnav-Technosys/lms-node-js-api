const db = require("../models");
const Department = db.department;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");

const getAllDepartments = async (req, res) => {
  try {
    const result = await Department.findAll({
      where: {
        [Op.and]: [{ collegeId: req.params.id }, { isDeleted: false }],
      },
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addDepartment = async (req, res) => {
  try {
    const result = await Department.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const result = await Department.update(req.body, {
      where: { deptId: req.body.deptId },
    });
    res.status(200).send({ success: "Records updated successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const result = await Department.update(
      { isDeleted: true },
      { where: { deptId: req.params.id } }
    );
    res.status(200).send({ success: "Records deleted successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

module.exports = {
  getAllDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
