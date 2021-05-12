'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class catalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  catalog.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'catalog',
  });
  return catalog;
};