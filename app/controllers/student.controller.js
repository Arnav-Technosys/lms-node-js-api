const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

const getAllStudents = async (req, res) => {
  let students = await Student.findAll({where:{isDeleted:false}});
  console.log(students);
  res.status(200).send(students);
};

const getSingleStudent=async(req,res)=>{
  try{
  let student=await Student.findOne({where:{studId:req.params.id}});
  res.status(200).send(student);
  } catch(err){
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
}

const addStudents = async (req, res) => {
  try {
    console.log(req.body);
    const students = await Student.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const updateStudent=async(req,res)=>{
  try{
   const student =await  Student.update(req.body,{where:{studId:req.body.studId}});
   res.status(200).send({success:"Student record updated successfully..!"})
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
}

const deleteStudent =async(req,res)=>{
  try{
    let student=await Student.update({isDeleted:true},{where:{studId:req.params.id}});
    res.status(200).send({success:"Record deleted successfully..!"});
  }catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
}

module.exports = {
  getAllStudents,
  addStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent
};
