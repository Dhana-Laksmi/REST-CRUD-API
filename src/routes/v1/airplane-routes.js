const express = require("express");

const { AirplaneController } = require("../../controllers");
const router = express.Router();


/**
 * URL: /api/v1/airplanes 
 * Method: POST
 *  */  
router.post('/', AirplaneController.createAirplane);
console.log("inside a Airplane Routes");
module.exports = router;
