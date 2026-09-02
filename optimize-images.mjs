import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");

const MIN_SIZE = 500 * 1024; // Only optimize images larger than 500 KB
const MAX_WIDTH = 2000;
const MAX_HEIGHT = 2000;

const supportedExtensions = [".jpg", ".jpeg", ".png", ".webp"];

function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getFiles(fullPath);
    }

    return [fullPath];
  });
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const originalSize = fs.statSync(filePath).size;

  if (!supportedExtensions.includes(ext)) {
    return;
  }

  if (originalSize < MIN_SIZE) {
    return;
  }

  const tempPath = `${filePath}.optimized`;

  try {
    let image = sharp(filePath);

    image = image.resize({
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
      fit: "inside",
      withoutEnlargement: true,
    });

    if (ext === ".jpg" || ext === ".jpeg") {
      image = image.jpeg({
        quality: 82,
        mozjpeg: true,
      });
    } else if (ext === ".png") {
      image = image.png({
        compressionLevel: 9,
        palette: true,
        quality: 82,
      });
    } else if (ext === ".webp") {
      image = image.webp({
        quality: 82,
      });
    }

    await image.toFile(tempPath);

    const newSize = fs.statSync(tempPath).size;

    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);

      const saved = originalSize - newSize;
      const percentage = ((saved / originalSize) * 100).toFixed(1);

      console.log(
        `✓ ${path.relative(PUBLIC_DIR, filePath)}`
      );

      console.log(
        `  ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB`
      );

      console.log(
        `  Saved ${percentage}%`
      );
    } else {
      fs.unlinkSync(tempPath);

      console.log(
        `- ${path.relative(PUBLIC_DIR, filePath)} already optimized`
      );
    }
  } catch (error) {
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }

    console.error(
      `✗ Failed: ${path.relative(PUBLIC_DIR, filePath)}`
    );

    console.error(error.message);
  }
}

async function main() {
  console.log("Hill City Media Image Optimizer");
  console.log("--------------------------------");
  console.log("");

  const files = getFiles(PUBLIC_DIR);

  const images = files.filter((file) =>
    supportedExtensions.includes(path.extname(file).toLowerCase())
  );

  for (const file of images) {
    await optimizeImage(file);
  }

  console.log("");
  console.log("Image optimization complete.");
}

main();