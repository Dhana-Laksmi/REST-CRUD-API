const { response } = require("express");
const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
/**
 *
 * @param {*} req
 * @param {*} res
 */
async function createAirplane(req, res) {
  try {
    console.log("Inside a Controller");
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully create an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Somthing Went Wrong!",
      data: {},
      error: error,
    });
  }
}

module.exports = { createAirplane }
