const society = require("../controllers/society.controller.js");
var router = require("express").Router();

router.get("/getSocietyDetails",society.getSocietyDetails);
router.post("/addSociety",society.addSociety);

module.exports=router;