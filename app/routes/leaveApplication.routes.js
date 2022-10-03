const leaveApp = require("../controllers/leaveApplication.controller.js");
var router = require("express").Router();

router.get("/getAllLeaveApplications", leaveApp.getAllLeaveApplications);
router.post(
  "/addLeaveApplication",
  leaveApp.upload,
  leaveApp.addLeaveApplication
);
router.post(
  "/addLeaveApplicationWithoutFile",
  leaveApp.addLeaveApplicationWithoutFile
);
router.put("/updateLeaveApplication", leaveApp.updateLeaveApplication);
router.delete("/deleteLeaveApplication/:id", leaveApp.deleteLeaveApplication);

module.exports = router;
