const e = require("express");
const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "TypeError") {
      throw new AppError(
        "Cannot create a new Airplane object",
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
    throw error;
  }
}

async function getAllAirplanes() {
  try {
    const airplanes=await airplaneRepository.getAll()
    return airplanes
  } catch (error) {
    throw new AppError('Cannot fetch the data',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
module.exports = { createAirplane, getAllAirplanes };
