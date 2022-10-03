const employee = require("../controllers/employee.controller.js");
var router = require("express").Router();

router.post("/getAllEmployeeByClgDept",employee.getAllEmployeeByClgDept);
router.post("/addSingleEmployee",employee.addSingleEmployee);
router.post("/addMultipleEmployee",employee.addMultipleEmployee);
router.put("/updateEmployee",employee.updateEmployee);
router.delete("/deleteEmployee/:id",employee.deleteEmployee);
router.post("/changeAccountStatus",employee.changeAccountStatus);
router.post("/viewEmployeePassword",employee.viewEmployeePassword);
router.post("/employeeSignin",employee.employeeSignin);
router.post("/getAllEmployeeByClgDeptForExcel",employee.getAllEmployeeByClgDeptForExcel);

module.exports=router;