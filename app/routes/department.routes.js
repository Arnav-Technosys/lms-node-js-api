const department = require("../controllers/department.controller.js");
var router = require("express").Router();

router.get("/getAllDepartments/:id",department.getAllDepartments);
router.post("/addDepartment",department.addDepartment);
router.put("/updateDepartment",department.updateDepartment);
router.delete("/deleteDepartment/:id",department.deleteDepartment);

module.exports=router;