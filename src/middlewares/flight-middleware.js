const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const appError = require("../utils/error/app-error");
function validateCreateFlight(req, res, next) {
  if (!req.body.airplaneId) {
    errorResponse.message = "something went wrong while creating flight";
    errorResponse.error = new appError(
      "airplaneId is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.departureAirportId) {
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "departureAirportId is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.arrivalAirportId) {
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "arrivalAirportId is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
}
  if (!req.body.flightNumber ){
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "flightNumber is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.arrivalTime ){
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "arrivalTime is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.departureTime ){
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "departureTime is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.price){
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "price is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
    if (!req.body.totalSeats){
    errorResponse.message = "something went wrong while creating flights";
    errorResponse.error = new appError(
      "totalSeats is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  next();
}
module.exports = { validateCreateFlight };
