// Get element
const numberInput = document.querySelector(".number-input");
const deBai = document.querySelector(".de-bai");
const ketQua = document.querySelector(".ket-qua");

function handleArrayInput() {
  // Get value
  const valNumberInput = numberInput.value.trim();
  const valDeBai = deBai.value;
  // Tách chuỗi
  const numberArray = valNumberInput.split(" ");
  // Kiểm tra mảng có là phần tử là số không?
  let isNumber = true;
  for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = +numberArray[i];
    // Nếu là bài tập 9 thì cho phép nhập số thực
    if (valDeBai === "item9") {
      if (isNaN(numberArray[i])) {
        isNumber = false;
        break;
      }
      // Nếu không phải bài tập 9 thì chỉ cho phép nhập số nguyên
    } else {
      if (!Number.isInteger(numberArray[i])) {
        isNumber = false;
        break;
      }
    }
  }

  if (!isNumber) {
    alert("Vui lòng nhập đúng định dạng số!");
  }
  // Tính toán
  switch (valDeBai) {
    // Bài 1: Tổng các số dương trong mảng
    case "item1":
      let sum = 0;
      for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
          sum += numberArray[i];
        }
      }
      return (ketQua.value = "Tổng các số dương trong mảng: " + sum);

    // Bài 2: Điếm có bao nhiêu số dương trong mảng
    case "item2":
      let count = 0;
      for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
          count++;
        }
      }
      return (ketQua.value = `Có ${count} số dương trong mảng`);

    // Bài 3: Tìm số nhỏ nhất trong mảng
    case "item3":
      //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
      let min = numberArray[0];
      /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
      for (let i = 0; i < numberArray.length; ++i) {
        if (numberArray[i] < min) {
          //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
          min = numberArray[i];
        }
      }
      return (ketQua.value = `${min} là số nhỏ nhất trong mảng`);

    // Bài 4: Tìm số dương nhỏ nhất trong mảng
    case "item4":
      // Tach mang moi vs phan tu la so duong
      let arrDuong = [];
      for (let i = 0; i < numberArray.length; ++i) {
        if (numberArray[i] > 0) {
          arrDuong.push(numberArray[i]);
        }
      }
      // So sanh tim phan tu so duong nho nhat
      let minDuong = arrDuong[0];
      for (let i = 0; i < arrDuong.length; ++i) {
        if (arrDuong[i] < minDuong) {
          minDuong = arrDuong[i];
        }
      }
      return (ketQua.value = `${minDuong} là số dương nhỏ nhất trong mảng`);

    //  Bài 5: Tìm số chẵn cuối cùng trong mảng.Nếu mảng không có giá trị chẵn thì trả về -1
    case "item5":
      let valEven = findLastEven(numberArray);
      return (ketQua.value = valEven);

    // Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
    case "item6":
      const viTriCu = document.querySelector(".vi-tri-cu");
      const viTriMoi = document.querySelector(".vi-tri-moi");
      const lengthArr = numberArray.length;

      const valCu = +viTriCu.value;
      const valMoi = +viTriMoi.value;

      if (
        (valCu < 0 || valCu >= lengthArr) ||
        (valMoi < 0 || valMoi >= lengthArr)
      ) {
        alert("Vị trí thay đổi phải nhỏ hơn độ dài mảng và lớn hơn hoặc bằng 0!");
      }

      let temp = numberArray[valCu];
      numberArray[valCu] = numberArray[valMoi];
      numberArray[valMoi] = temp;

      return (ketQua.value = numberArray.join(" "));

    // Bài 7: Sắp xếp mảng theo giá trị tăng dần
    case "item7":
      numberArray.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      return (ketQua.value = numberArray.join(" "));

    // Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1
    case "item8":
      let valBt8;
      for (let i = 0; i < numberArray.length; ++i) {
        if (numberArray[i] === 2) {
          valBt8 = 2;
          return (ketQua.value = valBt8);
        }

        if (valBt8 !== 2 && soNguyenTo(numberArray[i]) === 1) {
          valBt8 = numberArray[i];
          return (ketQua.value = valBt8);
        }
      }
      if (valBt8 === undefined) {
        return (ketQua.value = -1);
      }

    //  Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
    case "item9":
      let countBt9 = 0;
      for (let i = 0; i < numberArray.length; ++i) {
        if (Number.isInteger(numberArray[i])) {
          countBt9++;
        }
      }
      return (ketQua.value = `Mảng có ${countBt9} số nguyên`);

    //  Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
    case "item10":
      let countDuong = 0;
      let countAm = 0;

      for (let i = 0; i < numberArray.length; ++i) {
        if (numberArray[i] < 0) {
          countAm++;
        }
        if (numberArray[i] > 0) {
          countDuong++;
        }
      }

      if (countDuong > countAm) {
        return (ketQua.value = "Số dương nhiều hơn số âm!");
      } else if (countDuong === countAm) {
        return (ketQua.value = "Số lượng số dương bằng số lượng số âm!");
      } else {
        return (ketQua.value = "Số âm nhiều hơn số dương!");
      }
    default:
      alert("Bạn hãy chọn đề bài!");
  }
}

function handleSelectionChange() {
  const valDeBai = deBai.value;

  const bt6 = document.querySelector(".bt-6");
  if (valDeBai === "item6") {
    bt6.style.display = "block";
  } else {
    bt6.style.display = "none";
  }

  numberInput.value = "";
  ketQua.value = "";
}

/*Tạo hàm kiểm tra số chẵn lẻ*/
function checkOddEven(n) {
  //flag = 1 => số lẻ
  //flag = 0 => số chẵn

  let flag = 1;
  if (n % 2 == 0) flag = 0;
  return flag;
}

/*Tạo hàm tìm số chẵn cuối cùng trong mảng JavaScript*/
function findLastEven(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (checkOddEven(array[i]) == 0) {
      return array[i];
    } else {
      return -1;
    }
  }
}

function soNguyenTo(n) {
  //flag = 0 => không phải số nguyên tố
  //flag = 1 => số nguyên tố

  let flag = 1;

  if (n < 2)
    return (flag = 0); /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

  /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
    }
    i++;
  }

  return flag;
}
