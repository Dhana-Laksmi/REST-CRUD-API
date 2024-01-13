const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    const airplane = await airportRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "TypeError") {
      throw new AppError(
        "Cannot create a new Airport object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "cannot create a new Airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllAirport() {
    try {
      const airports = await airportRepository.getAll();
      return airports;
    } catch (error) {
      throw new AppError(
        "Cannot fetch all the data of airport",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async function getAirport(id) {
    try {
      const airport = await airportRepository.get(id);
      return airport;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The airport you requested is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch or find the data from airport",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  
  async function destroyAirport(id) {
    try {
      const response = await airportRepository.destroy(id);
      return response;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The airport you requested to delete is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch or find the data from airport",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  
  async function updateAirport(id, data) {
    try {
      const response = await airportRepository.update(id, data);
      return response;
    } catch (error) {
      console.log("errorr", error);
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The airport you requested is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch or find the data from airport",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  module.exports={
    createAirport,
    getAirport,
    getAllAirport,
    updateAirport,
    destroyAirport
  }