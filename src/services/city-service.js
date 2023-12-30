const { CityRepository } = require("../repositories");
const cityRepository = new CityRepository();
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");


async function createCity(data) {
    try {
      const city = await cityRepository.create(data);
      return city;
    } catch (error) {
      if (error.name == "TypeError") {
        throw new AppError(
          "Cannot create a new City object",
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }
      if (error.name == "SequelizeUniqueConstraintError"|| "SequelizeValidationError") {
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      throw new AppError('cannot create a new city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  module.exports={createCity}