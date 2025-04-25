const express = require("express");
const { airplaneController } = require("../../controller");
const { airplaneMiddleware } = require("../../middlewares");
const router = express.Router();

//  /api/v1/airplanes Post request
router.post(
  "/",
  airplaneMiddleware.validateCreateAirplane,
  airplaneController.createAirplane
);
//  /api/v1/airplanes GET request
router.get("/", airplaneController.getAirplanes);
//  /api/v1/airplanes/id GET  request
router.get("/:id", airplaneController.getAirplane);
//  /api/v1/airplanes/id DELETE  request
router.delete("/:id", airplaneController.destroyAirplane);
//  /api/v1/airplanes/id PUT  request
router.put("/:id",airplaneController.updateAirplane);
module.exports = router;
