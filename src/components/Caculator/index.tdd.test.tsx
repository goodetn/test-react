import { Calculator } from ".";

describe("kiem-tra-nam-nhuan", () => {
  it("la nam-nhuan", () => {
    // setup:

    // run:

    // assert:
    expect(Calculator.isLeafYear(2000)).toBe(true);
    expect(Calculator.isLeafYear(2004)).toBe(true);
    expect(Calculator.isLeafYear(1960)).toBe(true);
    expect(Calculator.isLeafYear(1920)).toBe(true);
  });

  it("khong phai la nam-nhuan", () => {
    // setup:

    // run:

    // assert:
    // chia het cho 4 nhung chia het 100 luon nen false
    expect(Calculator.isLeafYear(1900)).toBe(false);
    expect(Calculator.isLeafYear(2003)).toBe(false);
    expect(Calculator.isLeafYear(1962)).toBe(false);
    expect(Calculator.isLeafYear(1922)).toBe(false);
  });
});

/**
 * TDD: (Test Driven Development)
 *
 * định nghĩa: viết test trước - code sau.
 *
 */

/**
 * đặt vấn đề:
 *
 * nhược điểm:
 *
 * giải pháp:
 *
 * phần mềm:
 *
 * ưu điểm:
 * - tdd viết test trước - code sau
 *  - là nó cover hết th cho mình rồi. k cần vừa viết vừa test
 *
 * cú pháp:
 *
 */
