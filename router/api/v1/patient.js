const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../../../controller/api/v1/user_controller");
const report_controller = require("../../../controller/api/v1/reports");

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  controller.createPatient
);
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  report_controller.createReport
);
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  report_controller.reports
);

module.exports = router;
