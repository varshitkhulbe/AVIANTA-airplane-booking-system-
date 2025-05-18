const { AirportService } = require("../services");
console.log(AirportService);
const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("../utils/common");
// POST: /
// req.body={name:"IGI", code:"IGI", address:"IGI Airport", cityId:5}
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address:req.body.address,
      cityId: req.body.cityId,
    });
    successResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "something went wrong while creating airport";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}
// POST: /airports
// req.body={}
async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    successResponse.data = airports;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message =
      "something went wrong while fetching data from airports";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}

// POST: /airports/id
// req.body={}
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    successResponse.data = airport;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "Something went wrong while fetching airport";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}
async function destroyAirport(req, res) {
  try {
    const response = await AirportService.destroyAirport(req.params.id);
    successResponse.data = response;
    successResponse.message = "Airport deleted successfully";
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "something went wrong while deleting airport";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}
async function updateAirport(req, res) {
  try {
    const airport = await AirportService.updateAirport(
      req.params.id,
      req.body
    );
    successResponse.data = airport;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    errorResponse.message = "something went wrong while updating airport";
    errorResponse.error = error;
    return res.status(error.StatusCode).json(errorResponse);
  }
}
module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport,
};
