const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
const { City, Airport } = require("./models");

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  //const bengaluru = await City.findByPk(1, {include: {model: Airport}});
  // console.log(bengaluru);
  // const airport = await Airport.create({name: 'Kempegowda Airport', code: 'BLR', cityId: 1});
  // const dbpairport = await bengaluru.createAirport({name: 'Huballi Airport', code: 'HBL'});
  // console.log(dbpairport);
  // const airportsInBlr = await bengaluru.getAirports();
  // console.log(airportsInBlr);
  // const hbairport = await Airport.findByPk(3);
  // console.log(hbairport);
  // await bengaluru.removeAirports(hbairport);
  // const mumbai = await City.findByPk(2);
  // const sh = mumbai.createAirport({name: 'CSI airport', code: 'MUM'});
  // await City.destroy({
  //     where: {
  //         id: 2
  //     }
  // });
  // const sh = await Airport.findByPk(2);
  // mumbai.removeAirport(sh)
  //   const city = await City.findByPk(14);
  //   await city.createAirport({ name: "Hyd Airport", code: "TS-HYD" });
  //   await City.destroy({
  //         where: {
  //             id: 2
  //         }
  //     });
});
