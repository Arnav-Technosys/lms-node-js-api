const role = require("../controllers/role.controller.js");
var router = require("express").Router();

router.get("/getAllRoles",role.getAllRoles);
router.post("/addRole",role.addRole);
router.put("/updateRole",role.updateRole);
router.delete("/deleteRole/:id",role.deleteRole);

module.exports=router;