const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../repositories");
const appError = require("../utils/error/app-error");
const flightrepository = new FlightRepository();
const {compareTime} = require("../utils/helper/datetime-helper");
async function createFlight(data) {
  try {
    if(!compareTime(data.arrivalTime,data.departureTime)){
      throw new appError(
        "Arrival time should be greater than departure time",
        StatusCodes.BAD_REQUEST
      );
    }
    const flight  = await flightrepository.create(data);
    return flight;
  } catch (error) {
    console.log("Error in creating flight", error);
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log("EXPLANATION IS:", explanation);
      throw new appError(explanation, StatusCodes.BAD_REQUEST);
    }
    if (error instanceof appError) {
      throw error;
    }
    throw new appError(
      "Cannot create a new flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
