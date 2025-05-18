const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const appError = require("../utils/error/app-error");
function validateCreateAirport(req, res, next) {
  if (!req.body.name) {
    errorResponse.message = "something went wrong while creating airport";
    errorResponse.error = new appError(
      "name is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.code) {
    errorResponse.message = "something went wrong while creating airport";
    errorResponse.error = new appError(
      "code is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  if (!req.body.cityId) {
    errorResponse.message = "something went wrong while creating airport";
    errorResponse.error = new appError(
      "cityId is not found in the incoming request or the format is incorrect",
      StatusCodes.BAD_REQUEST
    );
    return res.json(errorResponse);
  }
  next();
}
module.exports = { validateCreateAirport };
