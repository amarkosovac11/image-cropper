const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const cors = require("cors");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());


function validateCrop({ x, y, width, height }, imgMetadata) {
  const vals = [x, y, width, height].map((v) => parseInt(v));
  if (vals.some((v) => isNaN(v) || v < 1)) {
    return {
      left: 0,
      top: 0,
      width: imgMetadata.width,
      height: imgMetadata.height,
    };
  }
  return {
    left: vals[0],
    top: vals[1],
    width: vals[2],
    height: vals[3],
  };
}


app.post("/api/image/preview", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No image uploaded");

    const metadata = await sharp(req.file.buffer).metadata();
    const cropBox = validateCrop(req.body, metadata);

    const cropped = await sharp(req.file.buffer)
      .extract(cropBox)
      .resize({ width: 400 }) 
      .png()
      .toBuffer();

    res.set("Content-Type", "image/png");
    res.send(cropped);
  } catch (err) {
    console.error("❌ Error in preview:", err);
    res.status(500).send("Error processing image");
  }
});


app.post("/api/image/generate", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No image uploaded");

    const metadata = await sharp(req.file.buffer).metadata();
    const cropBox = validateCrop(req.body, metadata);

    const finalImage = await sharp(req.file.buffer)
      .extract(cropBox)
      .png()
      .toBuffer();

    res.set("Content-Type", "image/png");
    res.send(finalImage);
  } catch (err) {
    console.error("❌ Error in generate:", err);
    res.status(500).send("Error processing image");
  }
});

app.listen(5000, () =>
  console.log("✅ Backend running at http://localhost:5000")
);
