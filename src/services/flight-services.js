const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const appError = require("../utils/error/app-error");
const { Op } = require("sequelize");
const flightrepository = new FlightRepository();
const { compareTime } = require("../utils/helper/datetime-helper");
async function createFlight(data) {
  try {
    if (!compareTime(data.arrivalTime, data.departureTime)) {
      throw new appError(
        "Arrival time should be greater than departure time",
        StatusCodes.BAD_REQUEST
      );
    }
    const flight = await flightrepository.create(data);
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

async function getAllFlights(query) {
  try {
    console.log(query);
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips=MUM-DEL
    if (query.trips) {
      [departureAirportId, arrivalAirportId] = query.trips.split("-");
      if (departureAirportId == arrivalAirportId) {
        throw new appError(
          "Departure and Arrival airport cannot be same",
          StatusCodes.BAD_REQUEST
        );
      }
      customFilter.departureAirportId = departureAirportId;
      customFilter.arrivalAirportId = arrivalAirportId;
      console.log(customFilter);
    }

    if (query.price) {
      [minPrice, maxPrice] = query.price.split("-").map(Number);
      customFilter.price = {
        [Op.between]: [minPrice, maxPrice == undefined ? 20000 : maxPrice],
      };
    }

    if (query.traveller) {
      customFilter.totalSeats = {
        [Op.gte]: query.traveller,
      };
    }

    if (query.tripDate) {
      customFilter.departureTime = {
        [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
      };
    }

    if (query.sortBy) {
      const params = query.sortBy.split(",");
      const SortFilters = params.map((param) => param.split("_"));
      sortFilter = SortFilters;
    }

    const flights = await flightrepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return flights;
  } catch (error) {
    if (error instanceof appError) {
      throw error;
    }
    throw new appError(
      "Cannot fetch the data of all flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getFlight(id) {
  try {
    const flight = await flightrepository.get(id);
    return flight;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "the searched flight is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError(
      "there is a problem in fetching flight",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateSeats(data)
{
  try{
    const response= await flightrepository.updateRemainingSeats(data.flightId,data.seats,data.dec)
    return  response;
  }
  catch(error)
  {
    console.log(error);
   throw new appError(
      "There is a problem in updating the seats",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats
};
