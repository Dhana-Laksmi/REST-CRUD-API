const express = require("express");

const { FlightController } = require("../../controllers");
const router = express.Router();
const { FlightMiddlewares } = require("../../middlewares");

/**
 * URL: /api/v1/flights
 * Method: POST
 *  */
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

/**
 * URL: /api/v1/flights?trips=TNomalur-hydrabad
 * Method: GET
 *  */
router.get("/", FlightController.getFlights);

/**
 * URL: /api/v1/flights/:id
 * Method: GET
 *  */
router.get("/:id", FlightController.getFlight);

/**
 * URL: /api/v1/flights/:id
 * Method: DELETE
 *  */

router.delete("/:id", FlightController.destroyFlight);

router.patch("/:id", FlightController.updateFlight);

module.exports = router;
