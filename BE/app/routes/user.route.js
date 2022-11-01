const express = require("express");
const { route } = require("../../app");
const users = require("../controllers/user.controller");

const router = express.Router();


router.route("/")
    .post(users.create)
    .get(users.findAll);
router.route("/:id")
    .get(users.findOne)
    .put(users.update)
    .delete(users.delete);

router.route("/username")
    .get(users.findUsername);
module.exports = router;