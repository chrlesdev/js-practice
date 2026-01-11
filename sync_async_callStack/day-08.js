const { rejects } = require("assert");
const { resolve } = require("path");
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

// fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error("Files not Found");
//     console.error(err);
//   } else {
//     console.error("yoo lets goo");
//     console.log(data);
//   }
// });

// create a promise
// const myPromise = new Promise((resolve, rejects) => {
//   const rand = Math.floor(Math.random() * 2);
//   if (rand === 0) {
//     resolve();
//   } else {
//     rejects();
//   }
// });

// myPromise.then(() => console.log("success")).catch(() => console.error("something went wrong"));

// exercise
// 1

// function first() {
//   console.log("First function start");
//   second();
//   console.log("First function end");
// }

// function second() {
//   console.log("Second function start");
//   third();
//   console.log("Second function end");
// }

// function third() {
//   console.log("Third function");
// }

// first();

// 3

// Simulate getting user data
// function getUser(callback) {
//   setTimeout(() => {
//     callback({ id: 1, name: "Alice" });
//   }, 1000);
// }

// Simulate getting user's posts
// function getPosts(userId, callback) {
//   setTimeout(() => {
//     callback(["Post 1", "Post 2"]);
//   }, 1000);
// }

// so heres stating that we wanted to get the user first then the post so fetch where user id == user.id then get the user post

// getUser((e) => {
//   console.log("user :", e);

//   getPosts(e.id, (b) => {
//     console.log("the post :", b);
//   });
// });

// Task: Get user, THEN get their posts, THEN console.log posts
// Try writing this yourself!

//4
// let count = 0;

// function increment() {
//   setTimeout(() => {
//     count = count + 1;
//     console.log(count);
//   }, Math.random() * 1000);
// }

// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
// // console.log(Math.random() * 1000);

//5
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 1000);
  });
}

getData().then((data) => {
  console.log(data);
});
