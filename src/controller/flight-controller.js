const { FlightServices } = require("../services");
console.log(FlightServices);
const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("../utils/common");
const { success } = require("../utils/common/error-response");
// POST: /
// req.body={flightNumber:"AI-202", airplane_id:1, departureAirportId:1, arrivalAirportId:2, ArrivalTime:"2023-10-10T10:00:00Z", DepartureTime:"2023-10-10T12:00:00Z", price:5000, boardingGate:"A1", totalSeats:100}
async function createFlight(req, res) {
  try {
    const flight = await FlightServices.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    successResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "something went wrong while creating flight";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightServices.getAllFlights(req.query);
    successResponse.data = flights;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "something went wrong while fetching all flights";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}

async function getFlight(req, res) {
  try {
    const flight = await FlightServices.getFlight(req.params.id);
    successResponse.data = flight;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "something went wrong while fetching flight";
    errorResponse.error = error;
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}
module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
};
