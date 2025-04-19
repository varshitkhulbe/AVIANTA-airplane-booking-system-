const express = require("express");
const {airplaneController}= require("../../controller");
const {airplaneMiddleware}=require("../../middlewares")
const router = express.Router();


//  /api/v1/airplanes Post request
router.post("/",
    airplaneMiddleware.validateCreateAirplane,
    airplaneController.createAirplane);

module.exports = router;