const puppeteer = require('puppeteer');

const theURL = 'http://www2.hawaii.edu/~eherring/hawnprop/dod-visc.htm';
const browser = await puppeteer.launch();
const page = await browser.newPage();

//network idle tells it to wait until all things have loaded on the page
await page.goto(theURL, {waitUntil: 'networkidle2'});

//.evaluate is like running a console command
let data = await page.evaluate(()=> {
  let image = document.querySelector('img').src;
  let title = document.querySelector('title').innerText;
  
  return {image, title}
})

//console.log(await page.content());
console.log(data.image)

await browser.close();