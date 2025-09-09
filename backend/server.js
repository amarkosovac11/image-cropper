const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const cors = require("cors");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());

// Helper: validate crop params
function validateCrop({ x, y, width, height }) {
  const vals = [x, y, width, height].map((v) => parseInt(v));
  if (vals.some((v) => isNaN(v) || v < 1)) {
    return null;
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
    console.log("Preview req.body:", req.body);

    if (!req.file) {
      return res.status(400).send("No image uploaded");
    }

    const cropBox = validateCrop(req.body);
    if (!cropBox) {
      return res.status(400).send("Invalid crop parameters");
    }

    const cropped = await sharp(req.file.buffer)
      .extract(cropBox)
      .resize({ width: 400 }) // scaled down preview
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

    if (!req.file) {
      return res.status(400).send("No image uploaded");
    }

    const cropBox = validateCrop(req.body);
    if (!cropBox) {
      return res.status(400).send("Invalid crop parameters");
    }

    const cropped = await sharp(req.file.buffer)
      .extract(cropBox)
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
