const fs = require("fs");

// setTimeout(() => {
//   console.log("waited 3 second");
//   setTimeout(() => {
//     console.log("waited 2 second");
//     setTimeout(() => {
//       console.log("waited 1 second");
//     }, 1000);
//   }, 1000);
// }, 1000);
/**
 * ^
 * |
 * bad example because nested too much
 */

// error first callback

fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error("Files not Found");
    console.error(err);
  } else {
    console.error("yoo lets goo");
    console.log(data);
  }
});


// create a promise 
const myPromise  = new Promise