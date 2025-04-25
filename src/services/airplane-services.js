const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const appError = require("../utils/error/app-error");
const airplanerepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanerepository.create(data);
    return airplane;
  } catch (error) {
    console.log("Error in creating airplane", error.errors);
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log("EXPLANATION IS:", explanation);
      throw new appError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new appError(
      "Cannot create a new airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes(data) {
  try {
    const airplanes = await airplanerepository.getAll(data);
    return airplanes;
  } catch (error) {
    throw new appError(
      "Cannot fetch the data of all airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplanerepository.get(id);
    return airplane;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "The searched airplane is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError(
      "there is a problem fetching airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id){
  try {
    const response= await airplanerepository.delete(id);
    return response;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "The airplane you requested to delete is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError("Cannot delete the airplane",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function updateAirplane(id,data) {
  try {
    const airplane = await airplanerepository.update(id,data);
    return airplane;
  } catch (error) {
    console.log("Error in updating airplane", error.errors);
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new appError(
        "The airplane you requested to update is not found",
        StatusCodes.NOT_FOUND
      );
    }
    throw new appError(
      "Cannot update a new airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
};
