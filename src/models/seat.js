"use strict";
const { Model } = require("sequelize");
const {enums}= require("../utils/common/index");
const {BUISNESS,ECONOMY,PREMIUM_ECOMONY,FIRST_CLASS} = enums.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Airplane,{
        foreignKey: "airplaneId",
      })
    }
  }
  Seat.init(
    {
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Airplanes",
          key: "id",
        },
      },
      row: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      col: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seatClass: { 
        type: DataTypes.ENUM, 
        values:[BUISNESS,ECONOMY,PREMIUM_ECOMONY,FIRST_CLASS],
        defaultValue: ECONOMY,
        allowNull:false
      },
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
