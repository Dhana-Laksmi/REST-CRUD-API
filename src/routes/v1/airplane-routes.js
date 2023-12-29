const express = require("express");

const { AirplaneController } = require("../../controllers");
const router = express.Router();
const { AirplaneMiddlewares } = require("../../middlewares");

/**
 * URL: /api/v1/airplanes
 * Method: POST
 *  */
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);
router.get('/',AirplaneController.getAirplanes);
module.exports = router;
