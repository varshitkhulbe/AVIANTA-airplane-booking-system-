const express = require("express");
const { flightController } = require("../../controller");
const { flightMiddleware } = require("../../middlewares");
const router = express.Router();
// api/v1/flights POST
router.post(
  "/",
  flightMiddleware.validateCreateFlight,
  flightController.createFlight
);

// api/v1/flights?trips=MUM-DEL GET
router.get( 
  "/",flightController.getAllFlights
);

router.get(
  "/:id",
  flightController.getFlight
);


module.exports = router;

