const { rejects } = require("assert");
const { resolve } = require("path");

function fetchUser(userId) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      if (userId <= 0) {
        rejects(new Error("Invalid user ID"), null);
      } else {
        resolve({ id: userId, name: "Alice", followers: 150 });
      }
    }, Math.random() * 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve([
        { id: 101, userId: userId, likes: 25 },
        { id: 102, userId: userId, likes: 40 },
        { id: 103, userId: userId, likes: 15 },
      ]);
    }, Math.random() * 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve, rejects) => {
    const commentCount = Math.floor(Math.random() * 20);
    resolve({ postId: postId, count: commentCount });
  });
}
