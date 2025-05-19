const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");
const { Airport } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter,sort){
   try {
    console.log("Filter received:", filter);
    const response = await Flight.findAll({
      where: filter,
      order:sort
    });
    return response;
  } catch (error) {
    console.error("Error in Flight.findAll:", error);
    throw error;
  }
}}
module.exports = FlightRepository;
