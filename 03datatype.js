/**
 * 1. Primitif
 *  a. number => angka
 *  b. string => teks
 *  c. boolean => nilai biner (T/F, 1/0)
 *  d. undefined => suatu variabel belum diberikan nilai
 *  e. null => suatu variabel yang berarti kosong
 *
 * 2. Non-Primitif
 *  a. function => sekumpulan kode
 *  b. object => sekumpulan data yang berpasangan
 */

// null vs undefined
let undef;
// console.log(undef, typeof undef);
let nl = null;
// console.log(nl, typeof nl);

// function
// penulisan dengan metode deklaratif
// function namaFungsi (arg1, arg2, ...., argN){implemntation}
function greeting() {
  let username = "Budi";
  console.log("Selamat Pagi, " + username);
}
// output fungsi ada 2
// 1. print ke console/terminal => console.log
// 2. nilai fungsi digunakan kembali => return
function luasPersegi(sisi) {
  const luas = sisi * sisi;
  //   console.log(luas);
  return luas;
}
const hargaKeramik = 50000;
const luasRuangan = luasPersegi(4);
const hargaTotal = hargaKeramik * luasRuangan;
console.log("Harga Akhir = " + hargaTotal);
greeting();

// object => sekumpulan data yang berpasangan
/**
 * 1. Object {}
 * - pasangan antara key dan value
 * - Key => Letak data dalam object, tidak berurutan
 * - Value => nilai pada setiap key
 * - pengambilan data
 *  a. namaObject.namaKey
 *  b. namaObject["namaKey"]
 */
/**
 * 2. Array []
 * - pasangan antara index dan value
 * - Index => Posisi data dalam array, berurutan
 * - Value => nilai pada setiap index
 * - Urutan data memiliki arti
 * - pengambilan data: namaArray[nomorIndex]
 */

// Array
const Hobbies = ["Hiking", "Swimming", "Reading"];
const args = [1, true, "gaming", undefined, null, function () {}, {}];
// Object
const userProfile = {
  firstName: "Andi",
  lastName: "Bahari",
  sex: "M",
  age: 28,
  "date of birth": "March 25th",
  hobbies: ["Hiking", "Swimming", "Reading"],
  isMarried: false,
  fullName: function () {
    return this.firstName + this.lastName;
  },
};

// Pengambilan data
console.log(Hobbies[1]);
console.log(userProfile.lastName);
console.log(userProfile["date of birth"]);
