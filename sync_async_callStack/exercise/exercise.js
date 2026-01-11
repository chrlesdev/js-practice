/**
The Challenge: User Profile Dashboard
Build a system that:

Fetches a user (async)
Fetches their posts (async, using user.id)
Fetches comments for each post (async, using post.id)
Calculates total engagement (sync)
Handles errors properly
 */
// Simulated API functions (don't modify these)

/**
 *Part 1: Callback Version
Write getUserDashboard(userId, callback) that:

Fetches user
Then fetches their posts
Then fetches comments for EACH post (loop needed!)
Calculates total likes + total comments
Returns: { user, totalLikes, totalComments }

Handle errors at each step! 
 */

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
