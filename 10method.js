// Method => fungsi sebagai value dari key dari suatu object

const biodata = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
  isMarried: false,
  ping: () => {
    // jika tidak menggunakan this pada method, silahkan menggunakan
    // penulisan ekspresif atau arrow
    // jika ingin seragam, disarankan menggunakan ekspresif
    return "pong";
  },
  getFullAddress: function () {
    const { street, suite, city, zipcode } = this.address;
    // this pada ekpresif mengacu ke object biodata
    // this pada arrow mengacu ke pembungkus object (global)
    // kesimpulan:
    // jika menggunakan this pada method, gunakan penulisan ekspresif
    return `${suite}, st. ${street}, ${city} ${zipcode}`;
  },
};
// console.log(biodata.ping);
// console.log(biodata.ping());
// console.log(biodata.getFullAddress());

// built in methods
// 1. Array.sort => digunakan untuk mengurutkan elemen array
// memiliki sifat mutasi => merubah array aslinya
const numbers = [1, 4, 7, 2, 5, 8, 3, 6, 9, 10];
const compareFn = (a, b) => {
  //   console.log(a, b);
  return a - b;
  // a < b, negative
  // a == b, 0
  // a > b, positive
};
const sortOut = numbers.sort(compareFn);
// console.log(numbers);
// console.log(sortOut);

// 2. Array.reverse => membalikkan urutan
// memiliki sifat mutasi => merubah array aslinya
const revOut = sortOut.reverse();
// console.log(sortOut);
// console.log(revOut);

// 3. Array.push => memasukkan elemen array baru di posisi belakang
// memiliki sifat mutasi => merubah array aslinya
// output => pjg array terbaru
const pushOut = revOut.push(20);
// console.log(revOut);
// console.log(pushOut);

// 4. Array.map => untuk iterasi sepanjang semua elemen array dan
// menjalankan fungsi callback untuk masing masing elemen
// memiliki sifat non-mutasi => array asli tidak berubah
// output => array baru
function cb(number) {
  if (number % 2 === 0) {
    return number * 100;
  }
  return "Ganjil";
}
// const mapOut = numbers.map(cb);
// console.log(numbers);
// console.log(mapOut);
const mapOut2 = numbers.map((el, idx, arr) => {
  return el * idx + arr.length;
});
// console.log(numbers);
// console.log(mapOut2);

// 5. String.split => memisahkan string menjadi elemen2 array
// berdasarkan pemisah yang telah ditentukan
// memiliki sifat non-mutasi => string asli tidak berubah
// output => array baru hasil split
const str = "Saya Belajar Javascript";
const splitOut = str.split(" ");
// console.log(str);
// console.log(splitOut);

// 6. Array.join => menggabungkan elemen2 array menjadi suatu string
// dengan pemisah yang telah ditentukan
// memiliki sifat non-mutasi => array asli tidak berubah
// output => string baru hasil join
const joinOut = splitOut.join("_");
// console.log(splitOut);
// console.log(joinOut);

const createCircle = (radius) => {
  return {
    radius: radius,
    area: function () {
      return 3.14 * this.radius * this.radius;
    },
  };
};

const circle = createCircle(5);
// console.log(circle.area());

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.phi = 3.14;
  }
  area() {
    return this.radius * this.radius * this.phi;
  }
}

const lingkaran = new Circle(5);
// console.log(lingkaran.area());
