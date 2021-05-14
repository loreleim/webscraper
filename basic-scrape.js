const puppeteer = require('puppeteer');

const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('http://www2.hawaii.edu/~eherring/hawnprop/dod-visc.htm');

console.log(await page.content());

await browser.close();
