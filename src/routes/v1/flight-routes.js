const express = require("express");
const { flightController } = require("../../controller");
const { flightMiddleware } = require("../../middlewares");
const router = express.Router();
// api/v1/flights
router.post(
  "/",
  flightMiddleware.validateCreateFlight,
  flightController.createFlight
);

module.exports = router;
