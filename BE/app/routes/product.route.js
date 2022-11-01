const express = require("express");
const { route } = require("../../app");
const products = require("../controllers/product.controller");
const router = express.Router();

router.route("/")
    .get(products.findAll)
    .post(products.create)
    .delete(products.deleteAll);

router.route("/shopping")
    .get(products.findAllShopping);

router.route("/:id")
    .get(products.findOne)
    .put(products.update)
    .delete(products.delete);
router.route("/name")
    .get(products.findName);
module.exports = router;