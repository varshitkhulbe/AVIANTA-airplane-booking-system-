const { Sequelize } = require("sequelize");
const db= require("../models");
const {addRowLockOnFlights}=require("./query")
const CrudRepository = require("./crud-repository");
const { Airplane, Airport, Flight, City } = require("../models");
const appError = require("../utils/error/app-error");
const {StatusCodes} = require("http-status-codes");
const { add } = require("winston");
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sortBy) {
    try {
      console.log("Filter received:", filter);
      const response = await Flight.findAll({
        where: filter,
        order: sortBy,
        include: [
          {
            model: Airplane,
            required: true,
          },
          {
            model: Airport,
            as: "departureAirport",
            required: true,
            on:{
              col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code")), //this is manual querying
            },
            include:{
              model: City,
              as: "city",
              required:true,
            }
          },
          {
            model: Airport,
            as: "arrivalAirport",
            required: true,
            include:{
              model: City,
              as: "city",
              required:true,
            }
          },
          
        ],
      });
      return response;
    } catch (error) {
      console.error("Error in Flight.findAll:", error);
      throw error;
    }
  }

  async updateRemainingSeats(flightId,seats,dec=true)
  {
    db.sequelize.query(addRowLockOnFlights(flightId));
    const  flight = await Flight.findByPk(flightId);
     
    if (!flight) {
    throw new appError(
      `Flight with id ${flightId} not found`,
      StatusCodes.NOT_FOUND
    );
  }
    if(+dec)
    {
      await flight.decrement("totalSeats",{by:seats});
    }
    else
    {
      await flight.increment("totalSeats",{by:seats});
    }
    await flight.save();
    return flight;
  }
}
module.exports = FlightRepository;
