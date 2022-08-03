const express = require("express");
const router = express.Router();
// const controller = require(".../controller/api ");

router.use("/products", require("./products"));
router.use("/doctor", require("./doctor"));
router.use("/patient", require("./patient"));

module.exports = router;
