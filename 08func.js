// function => sekumpulan kode yang menjalankan
//              perintah tertentu
/**
 * 1. Metode Deklaratif
 * function namaFungsi (input/argumen){
 *  implementasi dan/atau output fungsi
 * }
 */
// input:  jarak pengiriman
// output: harga ongkir
function shippingCost(distance) {
  // ketika jarak <= 2km, maka biaya ongkir 5000
  let output;
  if (distance <= 2) {
    output = 5000;
  } else {
    // setiap penambahan 1km, biaya bertambah 3000
    const diff = distance - 2;
    const diffCost = diff * 3000;
    output = 5000 + diffCost;
  }
  return output;
}
// menggunakan fungsi
let ongkir = shippingCost(5);
// console.log(ongkir);

/**
 * 2. Metode Ekspresif
 * tipeVar namaFungsi = function(input/argumen){
 *  implementasi dan/atau output fungsi
 * }
 * biasa digunakan untuk penulisan anonimous function
 */
const shippingCostEx = function (distance) {
  // ketika jarak <= 2km, maka biaya ongkir 5000
  let output;
  if (distance <= 2) {
    output = 5000;
  } else {
    // setiap penambahan 1km, biaya bertambah 3000
    const diff = distance - 2;
    const diffCost = diff * 3000;
    output = 5000 + diffCost;
  }
  return output;
};
// menggunakan fungsi
ongkir = shippingCostEx(5);
// console.log(ongkir);

/**
 * 3. Metode Anak Panah (>es6)
 * tipeVar namaFungsi = (input/argumen) => {
 *  implementasi dan/atau output fungsi
 * }
 */
const shippingCostArrow = (distance) => {
  // ketika jarak <= 2km, maka biaya ongkir 5000
  let output;
  if (distance <= 2) {
    output = 5000;
  } else {
    // setiap penambahan 1km, biaya bertambah 3000
    const diff = distance - 2;
    const diffCost = diff * 3000;
    output = 5000 + diffCost;
  }
  return output;
};
// menggunakan fungsi
ongkir = shippingCostArrow(5);
// console.log(ongkir);

// return
// 1. mengembalikan nilai => menghasilkan output
// 2. menghentikan fungsi
function testFunc() {
  let a = 1;
  let b = 2;
  return console.log(a);
  return console.log(b);
}
// testFunc();

function oddOrEven(input) {
  // validasi => jika input salah, maka fungsi berhenti
  //   if (typeof input !== "number") {
  //     console.log("Input harus berbentuk number");
  //   } else {
  //     if (input % 2 === 0) {
  //       console.log("Genap");
  //     } else {
  //       console.log("Ganjil");
  //     }
  //   }
  // validasi
  if (typeof input !== "number") {
    return "Input harus berbentuk number";
  }
  // implementasi
  if (input % 2 === 0) {
    return "Genap";
  }
  return "Ganjil";
}
// console.log(oddOrEven(2));
