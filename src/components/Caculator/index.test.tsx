import { Calculator } from ".";

describe("tinh-dien-tich", () => {
  it("tinh-dt-hinh-vuong", () => {
    // setup:
    const calculator = new Calculator();

    // run:
    const area = calculator.areaSquare(10);

    // assert:
    expect(area).toBe(100);
  });
});

/**
 * đặt vấn đề:
 * - thường khi viết 1 hàm như trên, việc test đúng sai ta
 * thường gọi ra, nhập đối số cần truyền, và kiểm tra kết
 * quả đúng hoặc sai. => đây là test tay. (manual test)
 *
 * nhược điểm:
 * - mỗi lần sửa hàm, cần test lại rất tốn công.
 *
 * giải pháp:
 * - dùng unit test
 *
 * phần mềm:
 * - jest của javascript
 *  (bonus: mỗi ngôn ngữ lập trình đều có những công cụ để
 * viết test)
 *
 * ưu điểm:
 * - hàm test s
 *
 * cú pháp:
 * describe('tinh toan', () => {// gom nhóm những cái test lại với nhau
 *  it('tinh dien tich hinh vuong', () => {
 *      // setup: (vd cần load db, chạy dữ liệu, làm gì đó...)
 *          const calculator = new Calculator();
 *
 *      // run: (chạy hàm)
 *           const dienTichHV = calculator.areaSquare(10);
 *
 *      // assert: (ktra kết quả)
 *          expect(area).toBe(100); ✅
 *          expect(area).toBe(10); ❌
 *              // th sai:
 *                  // - kiem tra sai o dau?
 *                      // - 1) sai ket qua dua vao? ✅
 *                      // - 2) sai tinh toan trong ham? ❌
 *
 *  })// 1 trường hợp mình cần test
 * })
 *
 */
