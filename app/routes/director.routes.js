const director = require("../controllers/director.controller.js");
var router = require("express").Router();

// router.get("/getSocietyDetails",society.getSocietyDetails);
router.post("/addDirector",director.addDirector);
router.post("/directorSignin",director.directorSignin);

module.exports=router;