"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      pcode: DataTypes.STRING,
      product_img: DataTypes.STRING,
    },
    {
      tableName: "ali_product",
      timestamps: false,
    }
  );
  Products.associate = function (models) {
    // associations can be defined here
  };
  return Products;
};
