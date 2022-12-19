const puppeteer = require("puppeteer");

let browser = null;
let page = null;

describe("Lazada test", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 200 });
    page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
    });
    jest.setTimeout(60000);
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto("https://www.lazada.vn/");
  });

  test("Search sexy underware", async () => {
    //   Verifies that a certain number of assertions are called during a test.
    //   This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
    expect.assertions(1);
    try {
      const searchBox = await page.$("#q");
      await searchBox.type("sexy underware");
      await searchBox.press("Enter");

      await page.waitForNavigation();
      const products = await page.$$("div[data-qa-locator=product-item]");
      expect(products.length).toBe(40);
    } catch (error) {
      console.log(error);
    }
  });
});

/**
 * đặt vấn đề:
 * - giả lập 1 cửa sổ chrome mở lên chạy tự động nhập dữ liệu, enter, kiểm tra kết quả đúng sai.
 * - đây là tool các bạn hay làm automation test, craw dữ liệu hay dùng.
 *
 * nhược điểm:
 * - chạy tốn thời gian(khoảng vài chục s)
 * - tốn tài nguyên.
 *
 * giải pháp:
 * - sử dụng thư viện
 *
 * phần mềm:
 * - puppeteer
 *
 * ưu điểm:
 * - chạy tự động đảm bảo hệ thống chạy ổn định tự động.
 *
 * cú pháp:
 *
 */
