const puppeteer = require('puppeteer');

const scraper = async(passedUrl) => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(passedUrl);

  const imgs = await page.$$eval('img.xyz[src]', imgs => imgs.map(img => img.getAttribute('src')));

  console.log({imgs});

  browser.close();
}

scraper('http://www2.hawaii.edu/~eherring/hawnprop/dod-visc.htm');