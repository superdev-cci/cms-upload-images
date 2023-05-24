var express = require("express");
var router = express.Router();
var multer = require("multer");
var fs = require("fs-extra");
var path = require("path");
const crypto = require("crypto");
const models = require("../models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Create a random string for the filename
    let randomName = crypto.randomBytes(16).toString("hex");
    // Keep the original file extension
    let ext = path.extname(file.originalname);
    cb(null, randomName + ext);
  },
});

// Configure multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, // 5 MB file size limit
});

/* POST image upload */
router.post("/uploadImage", upload.single("file"), async (req, res) => {
  try {
    const { product_code } = req.body;
    const updateProduct = await models.Products.update(
      {
        product_img: req.file.filename,
      },
      {
        where: {
          pcode: product_code,
        },
      }
    );
    res.send("Image upload successful");
  } catch (error) {
    console.log(error);
  }
});

/* POST image upload */
router.post(
  "/uploadPromotionImage",
  upload.single("file"),
  async (req, res) => {
    try {
      const { product_code } = req.body;
      const updateProduct = await models.ProductPackages.update(
        {
          product_img: req.file.filename,
        },
        {
          where: {
            pcode: product_code,
          },
        }
      );
      res.send("Image upload successful");
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
