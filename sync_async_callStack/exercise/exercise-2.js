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
      // 50% chance to fail
      if (Math.random() < 0.5) {
        reject(new Error(`Failed to fetch comments for post ${postId}`));
      } else {
        const commentCount = Math.floor(Math.random() * 20);
        resolve({ postId: postId, count: commentCount });
      }
    }, Math.random() * 1000);
  });
}

async function main(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchPosts(id);
    let commentStore = 0;
    let likeStore = 0;

    const commentPromises = posts.map(async (post) => {
      try {
        return await fetchComments(post.id);
      } catch (err) {
        console.error(`Failed for post ${post.id}:`, err.message);
        return null; // Return null for failed ones
      }
    });
    const allComments = await Promise.all(commentPromises);

    for (let i = 0; i < allComments.length; i++) {
      if (allComments[i] !== null) {
        commentStore += allComments[i].count;
      }
    }
    for (let i = 0; i < posts.length; i++) {
      likeStore += posts[i].likes;
    }
    console.log("comments: ", commentStore);
    console.log("likes: ", likeStore);
    console.log("user: ", user);
    console.log("post: ", posts);
    console.log("allComments: ", allComments);
  } catch (error) {
    console.error(error);
  }
}

main(1);
//
// fetchUser(1)
//   .then((user) => {
//     console.log(user);
//     return fetchPosts(user.id);
//   })
//   .then((posts) => {
//     console.log(`post: `, posts);

//     const commentPromises = posts.map((post) => {
//       return fetchComments(post.id);
//     });

//     return Promise.all(commentPromises);
//   })
//   .then((comments) => {
//     console.log(`comment: `, comments);
//   })

//   .catch((err) => console.error(err));
