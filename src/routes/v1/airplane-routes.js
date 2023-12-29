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

/**
 * URL: /api/v1/airplanes
 * Method: GET
 *  */
router.get("/", AirplaneController.getAirplanes);

/**
 * URL: /api/v1/airplanes/:id
 * Method: GET
 *  */
router.get("/:id", AirplaneController.getAirplane);

/**
 * URL: /api/v1/airplanes/:id
 * Method: DELETE
 *  */

router.delete('/:id',AirplaneController.destroyAirplane);

module.exports = router;
