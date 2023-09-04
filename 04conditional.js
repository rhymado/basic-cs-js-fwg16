// 1. if-else
// if (condition) {condition true} else {condition false}

const price = 10000;
// if (price > 10000) {
//   console.log("Mahal");
// } else {
//   console.log("Murah");
// }
// if (price > 10000) {
//   console.log("Mahal");
// } else if (price > 5000) {
//   console.log("Sedang");
// } else {
//   console.log("Murah");
// }

function oddOrEven(input) {
  // validasi
  if (typeof input !== "number") {
    console.log("Input harus berbentuk number");
  } else {
    if (input % 2 === 0) {
      console.log("Genap");
    } else {
      console.log("Ganjil");
    }
  }
}

// oddOrEven("Dua");
// oddOrEven(2);

// 2. switch-case
// switch(variabel yang dicek){ list cases }

function program(command) {
  switch (command) {
    case "BEGIN":
      console.log("Program Dimulai");
      break;
    case "END":
      console.log("Program Berhenti");
      break;
    case "GREET":
      console.log("Selamat Datang");
      break;
    case "LUCKY_NUMBER":
      const num = Math.random() * 1000;
      console.log("angka keberuntungan anda adalah =", num.toFixed(0));
      break;
    default:
      console.log("Command Salah");
  }
}

// program("BEGIN");
// program("Greet");
// program("LUCKY_NUMBER");
// program("END");

// 3. ternary op
// shorthand dari if-else
// condition ? if true : if false

const output = price >= 10000 ? "Mahal" : "Murah";
// console.log(output);
const harga =
  price > 0 ? (price > 10000 ? "Mahal" : price > 5000 ? "Sedang" : "Murah") : "Harga Tidak Valid";
console.log(harga);

//  4. short logic
//  shorthand operator AND dan OR
let username = "Andi";
const obj = {
  name: username || "Nama Saya",
};
console.log(obj);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even =
  numbers.length > 10 &&
  numbers.filter(function (num) {
    return num % 2 === 0;
  });
console.log(even);
