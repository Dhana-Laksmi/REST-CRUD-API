const express = require("express");

const { AirportController } = require("../../controllers");
const router = express.Router();
const { AirportMiddlewares } = require("../../middlewares");

/**
 * URL: /api/v1/airplanes
 * Method: POST
 *  */
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

/**
 * URL: /api/v1/airplanes
 * Method: GET
 *  */
router.get("/", AirportController.getAirports);

/**
 * URL: /api/v1/airplanes/:id
 * Method: GET
 *  */
router.get("/:id", AirportController.getAirport);

/**
 * URL: /api/v1/airplanes/:id
 * Method: DELETE
 *  */

router.delete("/:id", AirportController.destroyAirport);

router.patch("/:id", AirportController.updateAirport);

module.exports = router;
