import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 75, effort: 6 })
      .resize({ width: 1200, withoutEnlargement: true })
      .toFile(outputPath);

    console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

const optimizeAllImages = async () => {
  // const files = fs.readdirSync(inputDir);
  // const imageFiles = files.filter(file => 
  //   file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp')
  // );

  // Focus on the largest images first
  const largeImages = [
    'relxro.webp',
    'brooke-cagle--uHVRvDr7pg-unsplash.webp',
    'priscilla-du-preez-XkKCui44iM0-unsplash (1).webp',
    'cartoon-ai-robot-scene (2).webp',
    'jonathan-klok-JS8RhWVk74Q-unsplash.webp',
    'joseph-gonzalez-iFgRcqHznqg-unsplash.webp',
    'alesia-kazantceva-VWcPlbHglYc-unsplash.webp',
    'vitaly-gariev-tP666CeG03o-unsplash.webp',
    'john-FlPc9_VocJ4-unsplash.webp',
    'kimberly-farmer-lUaaKCUANVI-unsplash.webp',
    'pawel-czerwinski--0xCCPIbl3M-unsplash.webp',
    'brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands.webp',
    'indian-businessman-with-his-white-car.webp',
    'portrait-businessman-smiling.webp',
    'smiley-businesswoman-posing-city-with-arms-crossed.jpg',
    '1.webp',
    '2.webp',
    '3.webp',
    'vvx (1).webp'
  ];

  for (const image of largeImages) {
    if (fs.existsSync(path.join(inputDir, image))) {
      const inputPath = path.join(inputDir, image);
      const outputPath = path.join(outputDir, image);
      await optimizeImage(inputPath, outputPath);
    }
  }
};

optimizeAllImages().then(() => {
  console.log('Image optimization complete!');
}).catch(console.error);
