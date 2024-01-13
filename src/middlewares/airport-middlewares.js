const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common/");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {

  if(req.body.name && req.body.code && req.body.cityId){
    next();
  }
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["Name not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["Airport Code has not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
  }
  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = new AppError(
      ["Airport City Id has not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
  }
  return res.json(ErrorResponse);
}

module.exports = { validateCreateRequest };
