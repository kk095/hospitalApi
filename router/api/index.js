const express = require("express");
const router = express.Router();
// const controller = require(".../controller/api ");

router.use("/v1", require("./v1"));

module.exports = router;
