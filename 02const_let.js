/**
 * SCOPE
 * ruang lingkup dimana suatu variabel dapat
 * dipanggil/digunakan
 * 1. global scope
 * 2. function scope
 * 3. block scope
 */

// biasanya setiap block ditandai dengan kurung kurawal / {}
// inisialisasi/variabel yang berubah => gunakan let
// konstanta/variabel yang tetap => gunakan const

let username = "Andi";
// let username dideklarasikan pada block scope (file)

function getName() {
  //   console.log(username);
  let username = "Budi";
  // let username dideklarasikan pada function scope
  console.log(username);
}

if (true) {
  //   console.log(username);
  let username = "Candra";
  // let username dideklarasikan pada block scope (if)
  console.log(username);
}
while (true) {
  //   console.log(username);
  let username = "Dodi";
  console.log(username);
  break;
}

getName();
console.log(username);

// const HARUS dituliskan bentuk deklarasi dan assignment secara bersamaan
// const username = "Andi";
// // const username dideklarasikan pada block scope (file)

// function getName() {
//   //   console.log(username);
//   const username = "Budi";
//   // const username dideklarasikan pada function scope
//   console.log(username);
// }

// if (true) {
//   //   console.log(username);
//   const username = "Candra";
//   // const username dideklarasikan pada block scope (if)
//   console.log(username);
// }
// while (true) {
//   //   console.log(username);
//   const username = "Dodi";
//   console.log(username);
//   break;
// }

// getName();
// console.log(username);
