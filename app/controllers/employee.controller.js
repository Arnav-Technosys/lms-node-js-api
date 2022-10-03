const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");
const moment = require('moment');

const getAllEmployeeByClgDept = async (req, res) => {
  try {
    var result;
    if (req.body.collegeId) {
      if (req.body.deptId) {
        if (req.body.roleId) {
          result = await Employee.findAll({
            where: {
              [Op.and]: [
                { collegeId: req.body.collegeId },
                { deptId: req.body.deptId },
                { roleId: req.body.roleId },
                { isDeleted: false },
              ],
            },
          });
        } else {
          result = await Employee.findAll({
            where: {
              [Op.and]: [
                { collegeId: req.body.collegeId },
                { deptId: req.body.deptId },
                { isDeleted: false },
              ],
            },
          });
        }
      }
    }
    var data = JSON.stringify(result);
    var item = JSON.parse(data);
    for (let i = 0; i < item.length; i++) {
      item[i].pass = crypto.decrypt(item[i].pass);
    }
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addSingleEmployee = async (req, res) => {
  try {
    var pass = Math.floor(1000 + Math.random() * 9000).toString();
    var encryptedPass = crypto.encrypt(pass);
    req.body.pass = encryptedPass;
    const result = await Employee.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addMultipleEmployee = async (req, res) => {
  try {
    var data = req.body;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].pass);
      var encryptedPass = crypto.encrypt(data[i].pass.toString());
      data[i].pass = encryptedPass;
      console.log(data[i].pass);
    }
    const result = await Employee.bulkCreate(req.body, {
      updateOnDuplicate: ["empId"],
    });
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const result = await Employee.update(req.body, {
      where: { empId: req.body.empId },
    });
    res.status(200).send({ success: "Records updated successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const result = await Employee.update(
      { isDeleted: true },
      { where: { empId: req.params.id } }
    );
    res.status(200).send({ success: "Records deleted successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const changeAccountStatus = async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.accountStatus) {
      req.body.accountStatus = false;
    } else {
      req.body.accountStatus = true;
    }
    const result = await Employee.update(
      { accountStatus: req.body.accountStatus },
      { where: { empId: req.body.empId } }
    );
    res.status(200).send({ success: "Account status updated successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const viewEmployeePassword = async (req, res) => {
  try {
    var decytPass = crypto.decrypt(req.body.pass);
    console.log(decytPass);
    res
      .status(200)
      .send({ success: "Password decrypted successfully..!", pass: decytPass });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const employeeSignin = async (req, res) => {
  Employee.findOne({
    where: { empId: req.body.empId },
  })
    .then((data) => {
      if (!data) {
        return data
          .status(200)
          .send({ warning: "Invalid username & password..!" });
      }
      var decytPass = crypto.decrypt(data.pass);
      console.log(decytPass);
      if (req.body.pass == decytPass) {
        if(data.accountStatus){
          data.dataValues.success = "Login success..!";
          data.dataValues.pass = undefined;
          res.status(200).send(data);
        } else{
          return res.status(200).send({
            warning: "Your account is disabled contact to your administrator..!",
          });
        }
       
      } else {
        return res.status(200).send({
          warning: "Invalid username & password..!",
        });
      }
    })
    .catch((err) => {
      res.status(200).send({ warning: "Invalid username & password..!" });
    });
};

const getAllEmployeeByClgDeptForExcel = async (req, res) => {
  try {
    var result;
    if (req.body.collegeId) {
      if (req.body.deptId) {
        if (req.body.roleId) {
          result = await Employee.findAll({
            attributes: [
              ["empId", "Employee_ID"],
              ["empName", "Name"],
              ["empContact", "Contact"],
              ["empEmail", "Email"],
              ["empAddress", "Address"],
              ["joiningDate", "Joining_Date"],
              ["pass", "Password"]
            ],
            where: {
              [Op.and]: [
                { collegeId: req.body.collegeId },
                { deptId: req.body.deptId },
                { roleId: req.body.roleId },
                { isDeleted: false },
              ],
            },
          });
        } else {
          result = await Employee.findAll({
            attributes: [
              ["empId", "Employee_ID"],
              ["empName", "Name"],
              ["empContact", "Contact"],
              ["empEmail", "Email"],
              ["empAddress", "Address"],
              ["joiningDate", "Joining_Date"],
              ["pass", "Password"]
            ],
            where: {
              [Op.and]: [
                { collegeId: req.body.collegeId },
                { deptId: req.body.deptId },
                { isDeleted: false },
              ],
            },
          });
        }
      }
    }
    var data = JSON.stringify(result);
    var item = JSON.parse(data);
    for (let i = 0; i < item.length; i++) {
      item[i].Password = crypto.decrypt(item[i].Password);
      item[i].Joining_Date=moment(item[i].Joining_Date).format("DD-MM-YYYY")
    }
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

module.exports = {
  getAllEmployeeByClgDept,
  addSingleEmployee,
  addMultipleEmployee,
  updateEmployee,
  deleteEmployee,
  changeAccountStatus,
  viewEmployeePassword,
  employeeSignin,
  getAllEmployeeByClgDeptForExcel,
};
