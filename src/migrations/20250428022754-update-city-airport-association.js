'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("airports",{
      type:"FOREIGN KEY",
      name:"city_fkey_constraint",
      fields:["cityId"],
      references:{
        table:"cities",
        field: "id"
      },
      onDelete:"CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint("airports","city_fkey_constraint")
  }
};

