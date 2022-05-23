const express = require("express");
const router = express.Router();
const {
  newApp,
  getData,
  getRegisterPage,
} = require("../controller/controller");

router.get("/", newApp);

router.get("/register", getRegisterPage);
router.post("/register", getData);

module.exports = router;
