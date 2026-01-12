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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const commentCount = Math.floor(Math.random() * 20);
      resolve({ postId: postId, count: commentCount });
    }, Math.random() * 1000);
  });
}

fetchUser(1)
  .then((user) => {
    console.log(user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log(`post: `, posts);

    const commentPromises = posts.map((post) => {
      return fetchComments(post.id);
    });

    return Promise.all(commentPromises);
  })
  .then((comments) => {
    console.log(`comment: `, comments);
  })

  .catch((err) => console.error(err));

// fetchPosts(1)
//   .then((postId) => console.log(postId))
//   .catch((err) => console.error(err));
// fetchComments(101)
//   .then((comments) => console.log(comments))
//   .catch((err) => console.error(err));
