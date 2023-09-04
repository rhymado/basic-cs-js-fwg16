// copy array / object
const number = [1, 2, 3, 4, 5];
const numberCopy = number;
const numberCopySpread = [...number];

number[2] = 7;

// console.log(number);
// console.log(numberCopy);
// console.log(numberCopySpread);

// value and reference in js
const user = { name: "Andi", age: 28 };
const userCopy = user;
const userCopySpread = { ...user };

user.name = "Budi";

// console.log(user.name);
// console.log(userCopy.name);
// console.log(userCopySpread.name);

// menggabungkan array / object
const cities = ["Jakarta", "Bandung", "Semarang"];
const resultArr = [...number, ...cities];

// console.log(resultArr);

const userDetail = {
  name: "Candra",
  address: "Kudus",
};
const resultObj = { ...userDetail, ...user };

// console.log(resultObj);
// menggunakan penggabungan object sebagai
// pembaharuan object

const profile = {
  name: "Andi",
  photo: "files/photo.jpg",
  address: "Jakarta",
  mobiles: "+628123456789",
  sex: "M",
};

const input = {
  photo: "files/new_photo.png",
  address: "Bandung",
};

const newProfile = { ...profile, ...input };
// console.log(newProfile);

// destructuring
// array
const rgb = [0, 100, 255];
// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];
const [red, green, blue] = rgb;
console.log(red, green, blue);
// object
const { address: addr, name: username, age = 30 } = resultObj;
console.log(age);
