const db = require("../models");
const Role = db.role;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");

const getAllRoles = async (req, res) => {
  try {
    const role = await Role.findAll({where:{isDeleted:false}});
    res.status(200).send(role);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addRole = async (req, res) => {
  try {
    const sa = await Role.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const updateRole = async (req, res) => {
  try {
    const sa = await Role.update(req.body,{where:{roleId:req.body.roleId}});
    res.status(200).send({ success: "Records updated successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    const sa = await Role.update({ isDeleted: true },{ where: { roleId: req.params.id } });
    res.status(200).send({ success: "Records deleted successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

module.exports = {
  getAllRoles,
  addRole,
  updateRole,
  deleteRole
};
