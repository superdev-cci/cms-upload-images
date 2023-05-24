var express = require("express");
var router = express.Router();
const models = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const products = await models.Products.findAll({
    attributes: { exclude: ["id"] },
  });
  res.status(200).json({
    data: products,
  });
});

module.exports = router;
