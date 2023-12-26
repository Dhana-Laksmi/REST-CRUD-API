const e = require("express");
const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(data) {
  console.log("Inside a Service");
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log("ERRORRRR",error.name)
    if (error.name == "TypeError") {
      throw new AppError(
        "Cannot create a new Airplane object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    if(error.name=="SequelizeValidationError"){
      let explanation=[];
      error.errors.forEach((err)=>{
        explanation.push(err.message);
      })
      throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
}

module.exports = { createAirplane };
