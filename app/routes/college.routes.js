const college = require("../controllers/college.controller.js");
var router = require("express").Router();

router.get("/getAllColleges",college.getAllColleges);
router.post("/addSingleCollege",college.addSingleCollege);
router.post("/addMultipleCollege",college.addMultipleCollege);

module.exports=router;