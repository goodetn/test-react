import puppeteer from "puppeteer";

// jest.useRealTimers();
// jest.useFakeTimers("legacy");

describe("Youtube test", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 0,
      args: ["--no-sandbox"],
    });
    console.log("Browser launched");
    page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
    });
    jest.setTimeout(100000);
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto("https://www.youtube.com/", {
      waitUntil: "domcontentloaded",
    });
  }, 60000);

  test("Search sungha jung", async () => {
    //   Verifies that a certain number of assertions are called during a test.
    //   This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
    // expect.assertions(1);
    try {
      const searchBox = await page.$("#search-input");
      await searchBox.type("sungha jung");
      await searchBox.press("Enter");

      await page.waitForNavigation();
      const products = await page.$$(
        "ytd-video-renderer[class=style-scope ytd-item-section-renderer]"
      );
      expect(products.length).toBe(20);
    } catch (error) {
      console.log(error);
    }
  });
});

// describe("Google", () => {
//   let browser;
//   let page;

//   beforeAll(async () => {
//     page = await browser.newPage();
//     browser = await puppeteer.launch({ headless: false, slowMo: 200 });
//     await page.goto("https://google.com");
//     await page.setViewport({
//       width: 1920,
//       height: 1080,
//     });
//     jest.setTimeout(60000);
//   });

//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch("Google");
//   });

//   afterAll(async () => {
//     await browser.close();
//   });
// });
