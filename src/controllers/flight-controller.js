const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { FlightService } = require("../services");

async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });

    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getFlights(req, res) {
  try {
    console.log("req",req.query)
    const flights = await FlightService.getAllFlight(req.query);
    SuccessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log("getallcontroller",error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyFlight(req, res) {
  try {
    const response = await FlightService.destroyFlight(req.params.id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function updateFlight(req, res) {
  try {
    const response = await AirportService.updateFlight(req.params.id, {
      name: req.body.name,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getFlight,
  getFlights,
  destroyFlight,
  updateFlight,
};
