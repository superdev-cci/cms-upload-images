"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProductPackages = sequelize.define(
    "ProductPackages",
    {
      pcode: DataTypes.STRING,
      product_img: DataTypes.STRING,
    },
    {
      tableName: "ali_product_package",
      timestamps: false,
    }
  );
  ProductPackages.associate = function (models) {
    // associations can be defined here
  };
  return ProductPackages;
};
