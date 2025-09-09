const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const cors = require("cors");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });



app.use(cors()); 






app.post("/api/image/preview", upload.single("image"), async (req, res) => {
  try {
    console.log("Preview req.body:", req.body);
    console.log("Preview req.file:", req.file ? "File received" : "No file!");

    const { x, y, width, height } = req.body;
    const imageBuffer = req.file.buffer;

    const cropped = await sharp(imageBuffer)
      .extract({
        left: parseInt(x),
        top: parseInt(y),
        width: parseInt(width),
        height: parseInt(height),
      })
      .resize({ width: 400})
      .png()
      .toBuffer();


  





    res.set("Content-Type", "image/png");
    res.send(cropped);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing image");
  }
});


app.post("/api/image/generate", upload.single("image"), async (req, res) => {
  try {
    console.log("Generate req.body:", req.body);
    console.log("Generate req.file:", req.file ? "File received" : "No file!");

    const { x, y, width, height } = req.body;
    const imageBuffer = req.file.buffer;

    const cropped = await sharp(imageBuffer)
      .extract({
        left: parseInt(x),
        top: parseInt(y),
        width: parseInt(width),
        height: parseInt(height),
      })
      .png()
      .toBuffer();

    res.set("Content-Type", "image/png");
    res.send(cropped);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing image");
  }
});

app.listen(5000, () =>
  console.log("✅ Backend running at http://localhost:5000")
);
