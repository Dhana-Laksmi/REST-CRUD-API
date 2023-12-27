"use strict";

const {Op}=require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "airbus350",
        capacity: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "airbus150",
        capacity: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "airbus360",
        capacity: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('airplanes', {[Op.or]:[{modelNumber:"airbus150"},{modelNumber:"airbus360"}]});

  },
};
