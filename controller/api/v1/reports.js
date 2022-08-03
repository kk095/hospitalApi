const User = require("../../../model/user");
const Report = require("../../../model/report");

module.exports.createReport = async function (req, res) {
  try {
    let report = await Report.create({
      patient: req.params.id,
      doctor: req.user.id,
      status: req.body.status,
    });

    return res.status(500).json({
      message: "successfully report created!",
      data: {
        report,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports.reports = async function (req, res) {
  try {
    let reports = await Report.find({ patient: req.params.id });
    return res.status(500).json({
      message: "successfully render list of reports!",
      data: {
        reports,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
