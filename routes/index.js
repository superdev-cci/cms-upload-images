var express = require("express");
var router = express.Router();
const config = require("../config/index");

let temporaryTokens = {}; // Store temporary tokens

router.get("/", function (req, res, next) {
  res.status(200).json({
    message: "Hello World",
  });
});

/* GET handshake */
router.post("/handshake", function (req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== config.API_KEY) {
    return res.status(403).send("Unauthorized");
  }

  // Generate a temporary token
  const tempToken = [...Array(30)]
    .map(() => Math.random().toString(36)[2])
    .join("");

  // Store the token and the current time
  temporaryTokens[tempToken] = Date.now(); // Store the current time

  // Respond with the token
  res.json({ token: tempToken });
});

/* GET upload form */
router.get("/upload/product/:pcode/:tempToken", function (req, res, next) {
  const { pcode, tempToken } = req.params;

  if (!tempToken || !temporaryTokens[tempToken]) {
    return res.status(403).send("Unauthorized");
  }

  const tokenAge = Date.now() - temporaryTokens[tempToken];

  if (tokenAge > 3 * 60 * 1000) {
    // 3 minutes
    // If the token is more than 3 minutes old, reject it
    delete temporaryTokens[tempToken];
    return res.status(403).send("Unauthorized");
  }

  // If the token is valid and not expired, remove it so it can't be used again
  delete temporaryTokens[tempToken];

  // Render your HTML view here...
  res.render("upload", { title: "Upload", productCode: pcode });
});

router.get("/upload/promotion/:pcode/:tempToken", function (req, res, next) {
  const { pcode, tempToken } = req.params;

  if (!tempToken || !temporaryTokens[tempToken]) {
    return res.status(403).send("Unauthorized");
  }

  const tokenAge = Date.now() - temporaryTokens[tempToken];

  if (tokenAge > 3 * 60 * 1000) {
    // 3 minutes
    // If the token is more than 3 minutes old, reject it
    delete temporaryTokens[tempToken];
    return res.status(403).send("Unauthorized");
  }

  // If the token is valid and not expired, remove it so it can't be used again
  delete temporaryTokens[tempToken];

  // Render your HTML view here...
  res.render("uploadPromotion", { title: "Upload", productCode: pcode });
});

module.exports = router;
