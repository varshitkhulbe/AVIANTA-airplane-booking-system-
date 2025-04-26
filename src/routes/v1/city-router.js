const express = require("express")
const { cityController } = require("../../controller");
const { cityMiddlewares } = require("../../middlewares")
const router = express.Router()
router.post("/", cityMiddlewares.validateCreateCity, cityController.createCity);
router.delete("/:id",cityController.deleteCity);
router.put("/:id",cityController.updateCity);
module.exports = router