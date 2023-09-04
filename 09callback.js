// callback => fungsi yang merupakan input/argumen/parameter
// dari fungsi lain, yang kemudian akan dipanggil oleh
// fungsi lain tersebut

// diberikan sekumpulan bilangan
// ubah masing-masing bilangan menjadi ganjil/genap
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primes = [2, 3, 5, 7, 11, 13, 17, 19];

function oddOrEven(input) {
  // validasi => jika input salah, maka fungsi berhenti
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

function cb(number) {
  if (number % 2 === 0) {
    return number * 100;
  }
  return "Ganjil";
}

function changeArrayElements(inputArr, callback) {
  if (!Array.isArray(inputArr)) return "Array Salah";
  if (typeof callback !== "function") return "Callback Salah";
  const outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    outputArr[i] = callback(inputArr[i]);
  }

  return outputArr;
}

console.log(changeArrayElements(numbers, oddOrEven));
console.log(changeArrayElements(primes, cb));
console.log(
  changeArrayElements(primes, function (input) {
    if (input % 5 === 0) return "fazz";
    if (input % 3 === 0) return "track";
    return input;
  })
);
