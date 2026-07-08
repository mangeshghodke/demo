import sharp from 'sharp';
import fs from 'fs';

const input = 'public/logo-orig.jpg';
const output = 'public/logo.png';

const { data, info } = await sharp(input)
  .raw()
  .toBuffer({ resolveWithObject: true });

const getPixel = (x, y) => {
  const idx = (y * info.width + x) * 3;
  return { r: data[idx], g: data[idx+1], b: data[idx+2] };
};

const corners = [
  getPixel(0, 0),
  getPixel(info.width-1, 0),
  getPixel(0, info.height-1),
  getPixel(info.width-1, info.height-1),
];

const bg = {
  r: Math.round(corners.reduce((s, c) => s + c.r, 0) / corners.length),
  g: Math.round(corners.reduce((s, c) => s + c.g, 0) / corners.length),
  b: Math.round(corners.reduce((s, c) => s + c.b, 0) / corners.length),
};

console.log(`Image: ${info.width}x${info.height}`);
console.log(`Detected background: rgb(${bg.r},${bg.g},${bg.b})`);

const threshold = 40;
const rgba = Buffer.alloc(data.length / 3 * 4);

for (let i = 0; i < data.length / 3; i++) {
  const r = data[i * 3];
  const g = data[i * 3 + 1];
  const b = data[i * 3 + 2];

  const dist = Math.sqrt(
    (r - bg.r) ** 2 +
    (g - bg.g) ** 2 +
    (b - bg.b) ** 2
  );

  rgba[i * 4] = r;
  rgba[i * 4 + 1] = g;
  rgba[i * 4 + 2] = b;

  if (dist < threshold * 0.5) {
    rgba[i * 4 + 3] = 0;
  } else if (dist < threshold) {
    const alpha = (dist - threshold * 0.5) / (threshold * 0.5);
    rgba[i * 4 + 3] = Math.round(alpha * 255);
  } else {
    rgba[i * 4 + 3] = 255;
  }
}

await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(output);

console.log('Done! Wrote', output);
