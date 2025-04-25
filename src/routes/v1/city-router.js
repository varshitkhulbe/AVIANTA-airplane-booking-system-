const express = require("express")
const { cityController } = require("../../controller");
const { cityMiddlewares } = require("../../middlewares")
const router = express.Router()
router.post("/", cityMiddlewares.validateCreateCity, cityController.createCity);
module.exports = router