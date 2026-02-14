const router = require("express").Router();
const controller = require("../controllers/contactController");

router.post("/", controller.sendContact);

module.exports = router;
