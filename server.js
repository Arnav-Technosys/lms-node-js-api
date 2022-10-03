const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
const studentRouter = require("./app/routes/student.routes");
app.use("/lms-api/student", studentRouter);
const societyRouter = require("./app/routes/society.routes");
app.use("/lms-api/society", societyRouter);
const superAdminRouter = require("./app/routes/superAdmin.routes");
app.use("/lms-api/superAdmin", superAdminRouter);
const directorRouter = require("./app/routes/director.routes");
app.use("/lms-api/director", directorRouter);
const adminRouter = require("./app/routes/admin.routes");
app.use("/lms-api/admin", adminRouter);
const collegeRouter = require("./app/routes/college.routes");
app.use("/lms-api/college", collegeRouter);
const roleRouter = require("./app/routes/role.routes");
app.use("/lms-api/role", roleRouter);
const departmentRouter = require("./app/routes/department.routes");
app.use("/lms-api/department", departmentRouter);
const employeeRouter = require("./app/routes/employee.routes");
app.use("/lms-api/employee", employeeRouter);
const leaveRouter = require("./app/routes/leave.routes");
app.use("/lms-api/leave", leaveRouter);
const leaveAppRouter = require("./app/routes/leaveApplication.routes");
app.use("/lms-api/leaveApplication", leaveAppRouter);

app.use("/uploads", express.static("./uploads"));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
