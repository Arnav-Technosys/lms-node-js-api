const db = require("../models");
const Director = db.director;
const Op = db.Sequelize.Op;
const crypto = require("../config/crypto.config.js");

const addDirector = async (req, res) => {
  try {
    var pass = Math.floor(1000 + Math.random() * 9000).toString();
    var encryptedPass = crypto.encrypt(pass);
    console.log(encryptedPass);
    req.body.pass = encryptedPass;
    const sa = await Director.create(req.body);
    res.status(200).send({ success: "Records save successfully..!" });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Something went wrong please try again..!",
    });
  }
};

const directorSignin = async (req, res) => {
  Director.findOne({
    where: { contact: req.body.contact },
  })
    .then((data) => {
      if (!data) {
        return data
          .status(200)
          .send({ warning: "Invalid username & password..!" });
      }
      var decytPass = crypto.decrypt(data.pass);
      console.log(decytPass);
      if (req.body.pass == decytPass) {
        data.dataValues.success="Login success..!";
        data.dataValues.pass=undefined;
        res.status(200).send(data);
      } else {
        return res.status(200).send({
          warning: "Invalid username & password..!",
        });
      }
    })
    .catch((err) => {
      res.status(200).send({ warning: "Invalid username & password..!" });
    });
};

module.exports = {
  addDirector,
  directorSignin,
};
