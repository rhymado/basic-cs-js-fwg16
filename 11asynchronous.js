function callback(input) {
  return input;
}

//perintah async
function asyncFunc(timeout, cb) {
  // wait 1000 ms
  console.log(`begin ${timeout}`);
  setTimeout(() => {
    const text = "Hello World";
    const result = cb(text);
    return result;
  }, timeout);
}

// asyncFunc(100, (inp) => {
//   return inp.split(" ");
// });
// asyncFunc(400, (inp) => {
//   return inp.split(" ").map((val) => {
//     return val.toUpperCase();
//   });
// });
// asyncFunc(300, (inp) => {
//   return inp.split(" ").join("-");
// });
// asyncFunc(200, (inp) => {
//   return inp.split("").sort();
// });

/**
 * Promise
 * Perwakilan nilai yang tidak diketahui
 * nanti Promise akan berubah menjadi salah satu 
 * dari 2 bentuk:
 * 1. bentuk resolve => success
 * 2. bentuk reject => error
 */

const janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isRaining = false;
    if (isRaining) {
      return reject("Cuaca Hujan");
    }
    return resolve("Siap Siap Berangkat");
  }, 1000);
});

const onSuccess = (message) => {
  console.log(message.toUpperCase());
};
const onError = (reason) => {
  console.log(reason.toLowerCase());
};
// janjian.then(onSuccess).catch(onError);

function testPromise(timeout, cb) {
  // wait timeout ms
  console.log(`begin ${timeout}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const text = "Hello World";
      if (typeof cb !== "function") {
        return reject("cb bukan berupa fungsi");
      }
      const result = cb(text);
      resolve(result);
    }, timeout);
  });
}

async function doAsync(timeout, func, cb) {
  try {
    const result = await func(timeout, cb);
    console.log(`result = ${result}`);
  } catch (error) {
    console.log(`pesan error = ${error}`);
  } finally {
    console.log("finally");
  }
}

doAsync(300, testPromise, (inp) => {
  return inp.split(" ").join("-");
});
doAsync(200, testPromise, {});
