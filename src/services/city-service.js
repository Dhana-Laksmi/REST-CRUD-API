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

  async function getAllCity() {
    try {
      const cities = await cityRepository.getAll();
      return cities;
    } catch (error) {
      throw new AppError(
        "Cannot fetch all the data of cities",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  async function getCity(id) {
    try {
      const city = await cityRepository.get(id);
      return city;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The City you requested is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch or find the data from city",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async function destroyCity(id) {
    try {
      const response = await cityRepository.destroy(id);
      return response;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The city you requested to delete is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch or find the data from city",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async function updateCity(id, data) {
    try {
      const response = await cityRepository.update(id, data);
      return response;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The city you requested is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch or find the data from city",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
  module.exports={createCity,getAllCity,getCity,destroyCity,updateCity}