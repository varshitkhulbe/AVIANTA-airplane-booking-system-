const express = require("express");
const { airportController } = require("../../controller");
const { airportMiddleware } = require("../../middlewares");
const router = express.Router();
// /api/v1/airport Post request
router.post(
  "/",
  airportMiddleware.validateCreateAirport,
  airportController.createAirport
);
//  /api/v1/airport GET request
router.get("/", airportController.getAirports);
//  /api/v1/airport/id GET  request
router.get("/:id", airportController.getAirport);
//  /api/v1/airport/id DELETE  request
router.delete("/:id", airportController.destroyAirport);
//  /api/v1/airport/id PUT  request
router.put("/:id", airportController.updateAirport);
module.exports = router;
