'use strict';
/** @type {import('sequelize-cli').Migration} */
const { enums } = require('../utils/common/index');
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = enums.SEAT_TYPE;
const { Airplane} = require('../models');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:"Airplanes",
          key: "id"
        },
        onDelete: 'CASCADE',
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seatClass: {
        type: Sequelize.ENUM,
        values: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
        defaultValue: ECONOMY,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};