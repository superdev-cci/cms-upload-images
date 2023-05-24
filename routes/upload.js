var express = require("express");
var router = express.Router();
var multer = require("multer");
var fs = require("fs-extra");
var path = require("path");

// Configure multer
const upload = multer({
  dest: "uploads/", // This is where images will be uploaded
  limits: { fileSize: 5000000 }, // 5 MB file size limit
});

/* POST image upload */
router.post("/uploadImage", upload.single("file"), async (req, res) => {
  // req.file is the 'file' object
  // req.body will hold the text fields, if there were any

  //   const tempPath = req.file.path;
  //   const targetPath = path.join("/var/www/uploads/", req.file.originalname);

  //   // Renaming and moving the file
  //   try {
  //     await fs.rename(tempPath, targetPath);
  //     // Once the file is moved, you can then insert the new file path into your database
  //     // insertIntoDatabase(targetPath); // This is a placeholder. You would use your actual database insertion function here.
  //     res.send("Image upload successful");
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send("An error occurred while processing the file");
  //   }

  const tempPath = req.file.path;
  const targetPath = path.join("uploads/", req.file.originalname);

  // Renaming and moving the file
  try {
    await fs.rename(tempPath, targetPath);
    // Once the file is moved, you can then insert the new file path into your database
    // insertIntoDatabase(targetPath); // This is a placeholder. You would use your actual database insertion function here.
    res.send("Image upload successful");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while processing the file");
  }
});

module.exports = router;
