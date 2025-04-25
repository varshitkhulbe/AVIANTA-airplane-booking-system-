const express = require("express")
const { cityController } = require("../../controller");

const router = express.Router()
router.post("/", cityController.createCity);
module.exports = router