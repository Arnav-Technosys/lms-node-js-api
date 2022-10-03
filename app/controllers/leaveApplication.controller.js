const db = require("../models");
const NTLA = db.nonTeachingLeaveApp;
const TLA = db.teachingLeaveApp;
const HLA = db.hodLeaveApp;
const PLA = db.principalLeaveApp;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/docs");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "5000000" },
  // fileFilter: (req, file, cb) => {
  //   const fileTypes = /jpeg|jpg|png|gif/;
  //   const mimeType = fileTypes.test(file.mimetype);
  //   const extname = fileTypes.test(path.extname(file.originalname));

  //   if (mimeType && extname) {
  //     return cb(null, true);
  //   }
  //   cb("Give proper files formate to upload");
  // },
}).single("file");

const getAllLeaveApplications = async (req, res) => {
  try {
    var result;
    if (req.body.status == "All") {
      result = await NTLA.findAll({
        where: { isDeleted: false },
      });
    } else {
      result = await NTLA.findAll({
        where: {
          [Op.and]: [{ status: req.body.status }, { isDeleted: false }],
        },
      });
    }
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addLeaveApplication = async (req, res) => {
  try {
    let data = {
      empId: req.body.empId,
      leaveId: req.body.leaveId,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      totalDays: req.body.totalDays,
      reason: req.body.reason,
      loadAdjustedBy1: req.body.loadAdjustedBy1,
      loadAdjustedBy2: req.body.loadAdjustedBy2,
      loadAdjustedBy3: req.body.loadAdjustedBy3,
      file: req.file.path,
    };
    const sa = await NTLA.create(data);
    res.status(200).send({ success: "Application save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const addLeaveApplicationWithoutFile = async (req, res) => {
  try {
    const sa = await NTLA.create(req.body);
    res.status(200).send({ success: "Application save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const updateLeaveApplication = async (req, res) => {
  try {
    const sa = await NTLA.update(req.body, {
      where: { leaveId: req.body.leaveId },
    });
    res.status(200).send({ success: "Records updated successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const deleteLeaveApplication = async (req, res) => {
  try {
    const sa = await NTLA.update(
      { isDeleted: true },
      { where: { leaveId: req.params.id } }
    );
    res.status(200).send({ success: "Records deleted successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

module.exports = {
  getAllLeaveApplications,
  addLeaveApplication,
  updateLeaveApplication,
  deleteLeaveApplication,
  addLeaveApplicationWithoutFile,
  upload,
};
