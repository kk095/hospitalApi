const express = require("express");
const router = express.Router();
const controller = require("../../../controller/api/v1/user_controller");

router.post("/register", controller.createDoctor);
router.post("/login", controller.createToken);

module.exports = router;
