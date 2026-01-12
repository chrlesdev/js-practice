function fetchUser(userId, callback) {
  setTimeout(() => {
    if (userId <= 0) {
      callback(new Error("Invalid user ID"), null);
    } else {
      callback(null, { id: userId, name: "Alice", followers: 150 });
    }
  }, Math.random() * 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    callback(null, [
      { id: 101, userId: userId, likes: 25 },
      { id: 102, userId: userId, likes: 40 },
      { id: 103, userId: userId, likes: 15 },
    ]);
  }, Math.random() * 1000);
}

function fetchComments(postId, callback) {
  setTimeout(() => {
    const commentCount = Math.floor(Math.random() * 20);
    callback(null, { postId: postId, count: commentCount });
  }, Math.random() * 1000);
}

function getUserDashboard(userId, callback) {
  // All your logic goes inside here
  let totalLikes = 0;
  let commentsReceived = 0;
  let totalCommentCount = 0;
  fetchUser(userId, (err, user) => {
    if (err) {
      console.error(err);
    } else {
      console.log(user);
    }

    fetchPosts(user.id, (err, post) => {
      if (err) console.error(err);

      for (let i = 0; i < post.length; i++) {
        fetchComments(post[i].id, (err, comments) => {
          if (err) console.error(err);
          console.log("Comments for post :", comments);

          commentsReceived++;
          totalCommentCount += comments.count;

          if (commentsReceived === post.length) {
            console.log("Total comments:", totalCommentCount);
            console.log("Total likes:", totalLikes);
          }
        });
        totalLikes = totalLikes + post[i].likes;
      }
    });
  });

  callback(null, {
    user: userId,
    totalLikes: totalLikes,
    totalComment: totalCommentCount,
  });
}

getUserDashboard(1, (err, result) => {
  if (err) console.error(err);
  console.log(result);
});
