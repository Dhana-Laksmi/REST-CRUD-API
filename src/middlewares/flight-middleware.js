const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common/");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["flightNumber not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "flight airplaneId has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "flight departureAirportId has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "Flight arrivalAirportId has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "Flight arrivalTime has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }

  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "Flight departureTime has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }

  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "Flight price has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "Flight totalSeats has not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
