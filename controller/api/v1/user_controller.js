const User = require("../../../model/user");
const jwt = require("jsonwebtoken");

module.exports.createDoctor = async function (req, res) {
  try {
    let user = await User.create({
      phone: req.body.phone,
      name: req.body.name,
      role: "doctor",
      password: req.body.password,
    });
    return res.status(200).json({
      message: "successfully added Doctor!",
      data: {
        user,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "internal server error",
      err,
    });
  }
};
module.exports.createPatient = async function (req, res) {
  try {
    let user = await User.create({
      phone: req.body.phone,
      name: req.body.name,
      role: "patient",
      password: req.body.password,
    });
    return res.status(200).json({
      message: "successfully added Patient!",
      data: {
        user,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "internal server error",
      err,
    });
  }
};

module.exports.createToken = async function (req, res) {
  try {
    let user = await User.findOne({ phone: req.body.phone });
    if (!user || user.password != req.body.password || user.role != "doctor") {
      return res.status(401).json({
        message: "invalid username or password!",
      });
    }
    return res.status(200).json({
      message: "sign in successfully !",
      data: {
        token: jwt.sign(user.toJSON(), "mykey", {
          expiresIn: 10000,
        }),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error!",
    });
  }
};
