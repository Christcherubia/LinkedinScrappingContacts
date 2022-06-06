    const puppeteer = require("puppeteer");
    require("dotenv").config();

    const url = "https://www.linkedin.com/";



    (async () => {
        
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage(); 
       
        await page.setViewport({ width: 1280, height: 900 });
        await page.goto(url, {waitUntil: "networkidle2"});
       
        const navigationPromise = page.waitForNavigation();
       
        // cookie
        
        await page.click('[action-type="ACCEPT"]', {delay: 851.07});

        // login
        await page.type('[autocomplete="username"]', process.env.login , { delay: 165.75 });
        await page.type('[autocomplete="current-password"]', process.env.Passwd, { delay: 182.88});

        await page.click("button[type=submit]");

        // Recherche réseau
        await page.waitForTimeout(2500.35);

        await page.click('[href="/mynetwork/"]');
        

        // Chaque Button#ember est espacé de 7 unité ex : 356 et 363 etc.

        //const buttonEmber = 7
       // const searchButton = await page.$$('[button > #"ember"]');
        await page.waitForSelector(1997);
        const searchButton = await page.$$('[href="/in/ineslmahdi/"]');
        await page.waitForTimeout(2500.35);
        await page.click('[href="/in/ineslmahdi/"]');
        await page.click('#ember147'); // .artdeco-button__text >
        await page.waitForSelector(1987);
        await page.click('#ember14');



        debugger;
       
        //await browser.close();


     })();