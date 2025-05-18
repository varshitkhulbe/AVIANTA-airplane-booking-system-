const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const appError = require("../utils/error/app-error");
const airportrepository = new AirportRepository();

async function createAirport(data) {
  try {
    const airport  = await airportrepository.create(data);
    return airport;
  } catch (error) {
    console.log("Error in creating airport", error.errors);
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log("EXPLANATION IS:", explanation);
      throw new appError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new appError(
      "Cannot create a new airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports(data) {
  try {
    const airports = await airportrepository.getAll(data);
    return airports;
  } catch (error) {
    throw new appError(
      "Cannot fetch the data of all airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirport(id) {
  try {
    const airport = await airportrepository.get(id);
    return airport;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "The searched airport is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError(
      "there is a problem fetching airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    ); 
  }
}

async function destroyAirport(id){
  try {
    const response= await airportrepository.delete(id);
    return response;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "The airport you requested to delete is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError("Cannot delete the airport",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function updateAirport(id,data) {
  try {
    const airport = await airportrepository.update(id,data);
    return airport;
  } catch (error) {
    console.log("Error in updating airport", error.errors);
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "The airport you requested to update is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError(
      "Cannot update a new airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport
};
