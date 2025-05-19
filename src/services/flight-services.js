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

async function getAllFlights(query){
  try{
    console.log(query);
  let customFilter={};
// trips=MUM-DEL
  if(query.trips){
    [departureAirportId,arrivalAirportId]=query.trips.split("-");
    if(departureAirportId == arrivalAirportId){
      throw new appError(
        "Departure and Arrival airport cannot be same",
        StatusCodes.BAD_REQUEST
      );
     }
    customFilter.departureAirportId=departureAirportId;
    customFilter.arrivalAirportId=arrivalAirportId;
    console.log(customFilter);
  
    const flights=await flightrepository.getAllFlights(customFilter);
    return flights;
    }}catch(error){
     if (error instanceof appError){
      throw error;
     }
      throw new appError(
        "Cannot fetch the data of all flights",
        StatusCodes.INTERNAL_SERVER_ERROR)
  }
}
module.exports = {
  createFlight,
  getAllFlights
};
