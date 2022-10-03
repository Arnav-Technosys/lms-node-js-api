const superAdmin = require("../controllers/superAdmin.controller.js");
var router = require("express").Router();

// router.get("/getSocietyDetails",society.getSocietyDetails);
router.post("/addSuperAdmin",superAdmin.addSuperAdmin);
router.post("/superAdminSignin",superAdmin.superAdminSignin);

module.exports=router;