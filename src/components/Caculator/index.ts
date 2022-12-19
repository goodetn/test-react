export class Calculator {
  // tinh dien tich hinh vuong
  static areaSquare(a: number) {
    // dien tich hinh vuong =  canh * canh
    return a * a;
  }

  //   Kiểm tra năm nhuân:
  static isLeafYear(year: number) {
    // la nam nhuan

    // nam % 400 === 0
    if (year % 400 === 0) return true;

    //   không chia hết 400 nhưng chia hết 100
    // vd: 1100, 1200, 1300 : mặc dù chia hết cho 4
    // nhưng nó chia hết 100 mà kg chia hết 400
    // => kg phải năm nhuận
    if (year % 100 === 0) return false;

    // chia hết cho 4
    if (year % 4 === 0) return true;

    return false; // kg phải cases trên k phải năm nhuận.
  }
}
