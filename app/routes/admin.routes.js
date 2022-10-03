const admin = require("../controllers/admin.controller.js");
var router = require("express").Router();

// router.get("/getSocietyDetails",society.getSocietyDetails);
router.post("/addAdmin",admin.addAdmin);
router.post("/adminSignin",admin.adminSignin);

module.exports=router;