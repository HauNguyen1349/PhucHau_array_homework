// Tổng số dương
let numbers = [];

function addNumber() {
  const input = document.getElementById("numberInput");
  const value = Number(input.value);

  if (!isNaN(value)) {
    numbers.push(value);
    input.value = "";
    renderArray();
  }
}

function renderArray() {
  document.getElementById("arrayDisplay").innerText = "👉 Dãy số: " + numbers.join(", ");
}

function updatePositiveSum() {
  const sum = numbers.filter(n => n > 0).reduce((acc, cur) => acc + cur, 0);
  document.getElementById("positiveSum").innerText = sum;
}

function clearAll() {
  numbers = [];
  renderArray();
  document.getElementById("positiveSum").innerText = "0";
}

function toggleDropdown(contentId, arrowId) {
  const dropdown = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);
  dropdown.classList.toggle("hidden");
  arrow.innerText = dropdown.classList.contains("hidden") ? "▼" : "▲";
}

// Đếm số dương

function countPositiveNumbers() {
    const count = numbers.filter(n => n > 0).length;
    document.getElementById("positiveCount").innerText = count;
  }
  

// Tìm số nhỏ nhất

function findMin() {
    if (numbers.length === 0) {
      document.getElementById("minValue").innerText = "Không có dữ liệu";
      return;
    }
    const min = Math.min(...numbers);
    document.getElementById("minValue").innerText = min;
  }

// Tìm số dương nhỏ nhất

function findMinPositive() {
    const positives = numbers.filter(n => n > 0);
    if (positives.length === 0) {
      document.getElementById("minPositiveValue").innerText = "Không có số dương nào";
      return;
    }
    const minPositive = Math.min(...positives);
    document.getElementById("minPositiveValue").innerText = minPositive;
  }

// Tìm số chẵn cuối cùng

function findLastEven() {
    let lastEven = null;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        lastEven = numbers[i];
      }
    }
  
    const result = lastEven !== null ? lastEven : "Không có số chẵn nào";
    document.getElementById("lastEvenValue").innerText = result;
  }

//  Đổi chỗ
function swapPositions() {
    const index1 = Number(document.getElementById("pos1").value);
    const index2 = Number(document.getElementById("pos2").value);
    const resultBox = document.getElementById("swapResult");
  
    if (
      isNaN(index1) || isNaN(index2) ||
      index1 < 0 || index2 < 0 ||
      index1 >= numbers.length || index2 >= numbers.length
    ) {
      alert("Vị trí không hợp lệ. Vui lòng nhập index hợp lệ trong mảng.");
      return;
    }
  
    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
  
    renderArray(); // Cập nhật dòng chính
    resultBox.classList.remove("hidden");
    resultBox.innerText = "👉 Mảng sau khi đổi: " + numbers.join(", ");
  }
  
//   Sắp xếp tăng dần
function sortAscending() {
    if (numbers.length === 0) return;
  
    numbers.sort((a, b) => a - b);
  
    renderArray(); // Cập nhật hiển thị dãy số chính
  
    const resultBox = document.getElementById("sortResult");
    resultBox.classList.remove("hidden");
    resultBox.innerText = "👉 Mảng sau khi sắp xếp: " + numbers.join(", ");
  }
  

// Tìm số nguyên tố đầu tiên

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function findFirstPrime() {
    let found = false;
    let prime = null;
  
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        prime = numbers[i];
        found = true;
        break; // Dừng ngay khi tìm được
      }
    }
  
    const resultBox = document.getElementById("primeResult");
    resultBox.classList.remove("hidden");
  
    if (found) {
      resultBox.innerText = "👉 Số nguyên tố đầu tiên là: " + prime;
    } else {
      resultBox.innerText = "Không có số nguyên tố nào trong mảng.";
    }
  }
  
//   Đếm số nguyên
function countIntegers() {
    const count = numbers.filter(n => Number.isInteger(n)).length;
  
    const resultBox = document.getElementById("intResult");
    resultBox.classList.remove("hidden");
    resultBox.innerText = "👉 Số lượng số nguyên trong mảng là: " + count;
  }
  

// So sánh số âm và số dương
function compareNegPos() {
    const countPositive = numbers.filter(n => n > 0).length;
    const countNegative = numbers.filter(n => n < 0).length;
  
    let message = "";
    if (countPositive > countNegative) {
      message = "👉 Số dương nhiều hơn số âm.";
    } else if (countNegative > countPositive) {
      message = "👉 Số âm nhiều hơn số dương.";
    } else {
      message = "👉 Số lượng số âm và số dương bằng nhau.";
    }
  
    const resultBox = document.getElementById("compareResult");
    resultBox.classList.remove("hidden");
    resultBox.innerText = message;
  }
  