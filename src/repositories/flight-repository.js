const { Sequelize } = require("sequelize");
const CrudRepository = require("./crud-repository");
const { Airplane, Airport, Flight, City } = require("../models");
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
}
module.exports = FlightRepository;
