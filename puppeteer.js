const puppeteer = require('puppeteer');

const scrapeImages = async(passedUrl) => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto(passedUrl);
}