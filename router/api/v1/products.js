const express = require("express");
const router = express.Router();
const controller = require("../../../controller/api/v1/product_controller");

router.get("/", controller.products);
router.post("/create", controller.prod_create);
router.delete("/:id", controller.prod_remove);
router.post("/:id/update_quantity", controller.update);

module.exports = router;
