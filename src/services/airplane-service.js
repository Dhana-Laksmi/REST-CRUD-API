const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  console.log("Inside a Service");
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = { createAirplane };
