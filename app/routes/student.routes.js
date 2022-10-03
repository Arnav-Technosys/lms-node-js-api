const students = require("../controllers/student.controller.js");
var router = require("express").Router();

router.get("/getAllStudents",students.getAllStudents);
router.post("/addStudents",students.addStudents);
router.get("/getSingleStudent/:id",students.getSingleStudent);
router.put("/updateStudent",students.updateStudent);
router.delete("/deleteStudent/:id",students.deleteStudent);

module.exports=router;