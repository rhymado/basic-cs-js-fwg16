// D:\nodejs\fwg16\js-basic\main.js
// console.log("Hello World")

/**
 * SCOPE
 * ruang lingkup dimana suatu variabel dapat
 * dipanggil/digunakan
 * 1. global scope
 * 2. function scope
 * 3. block scope
 */

var username = "Andi";
// var username dideklarasikan pada global scope

// if (true) {
//   var username = "Budi";
//   // re-assign dari username global
//   console.log(username);
// }
// console.log(username);
function getName() {
  //   var username;
  //   console.log(username);
  //   username = "Budi";
  console.log(username);
  var username = "Budi";
  // var username dideklarasikan pada function scope
  console.log(username);
}

function getName2() {
  var username;
  console.log(username);
  username = "Candra";
  // var username dideklarasikan pada function scope
  console.log(username);
}

getName();
getName2();
console.log(username);

// hoisting => mengangkat bagian declaration
// deklarasi variabel terdiri dari 2 bagian
// 1. declaration => menentukan tipe dan nama variabel
// 2. assignment => memasukkan nilai kedalam variabel

var a;
var b;
var c;

a = "a";
b = "b";
c = "c";