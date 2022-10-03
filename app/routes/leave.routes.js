const leave = require("../controllers/leave.controller.js");
var router = require("express").Router();

router.get("/getAllLeaves",leave.getAllLeaves);
router.post("/addLeave",leave.addLeave);
router.put("/updateLeave",leave.updateLeave);
router.delete("/deleteLeave/:id",leave.deleteLeave);

module.exports=router;