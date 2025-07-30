// File: download-chromium.mjs
import chromium from '@sparticuz/chromium-min';

async function download() {
  console.log('Downloading latest Chromium revision for Vercel build...');
  try {
    const executablePath = await chromium.executablePath();
    console.log('✅ Chromium downloaded successfully to:', executablePath);
  } catch (error) {
    console.error('❌ Failed to download Chromium:', error);
    process.exit(1); // Hentikan proses build jika download gagal
  }
}

download();