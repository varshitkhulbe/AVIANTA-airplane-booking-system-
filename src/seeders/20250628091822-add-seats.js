'use strict';

/** @type {import('sequelize-cli').Migration} */
const {enums}= require("../utils/common/index");
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS} = enums.SEAT_TYPE;
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
       await queryInterface.bulkInsert("Seats", [
      {
        airplaneId: 1,
        row: 1,
        col: 'A',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'B',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
            {
        airplaneId: 1,
        row: 1,
        col: 'C',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'D',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
            {
        airplaneId: 1,
        row: 1,
        col: 'E',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'F',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'A',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'B',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
            {
        airplaneId: 1,
        row: 2,
        col: 'C',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'D',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
            {
        airplaneId: 1,
        row: 2,
        col: 'E',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'F',
        seatClass: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats', { airplaneId: 1 });
  }
};
