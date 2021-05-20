'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class etf_weekly3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  etf_weekly3.init({
    etfDataId: DataTypes.INTEGER,
    ticker: DataTypes.STRING,
    low_end: DataTypes.FLOAT,
    high_end: DataTypes.FLOAT,
    current_price: DataTypes.FLOAT,
    trend: DataTypes.STRING,
    ratio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'etf_weekly3',
  });
  return etf_weekly3;
};