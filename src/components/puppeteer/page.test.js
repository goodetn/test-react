// Testing a page with text

import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  }, 60000);

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:51484");
    await page.waitForSelector(".App-title");
    const text = await page.$eval(".App-title", (e) => e.textContent);
    expect(text).toContain("Welcome to React");
  });

  afterAll(() => browser.close());
});
