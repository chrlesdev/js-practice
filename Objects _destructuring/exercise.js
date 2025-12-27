/**
🎯 Your Tasks (no cheating, no loops, no conditionals)

1️⃣ Extract only the first user from the users array using array destructuring
2️⃣ From that user, destructure:
    - username
    - posts
3️⃣ Create a new object called publicUser with this exact shape:

{
  username: "alpha",
  posts: 10
}


❌ Do not include:
    - email
    - likes
    - id
    - isAdmin
    - pagination
    - requestId

⚠️ Rules:
    - Use destructuring (object + array)
    - No data.users[0].profile.username
    - No loops
    - No conditionals
    - No manual copying property by property
 */

const apiResponse = {
  status: "ok",
  meta: {
    requestId: "req-9912",
    pagination: {
      page: 2,
      pageSize: 10,
      total: 42,
    },
  },
  data: {
    users: [
      {
        id: 1,
        profile: {
          username: "alpha",
          email: "alpha@mail.dev",
        },
        activity: {
          posts: 10,
          likes: 200,
        },
        isAdmin: true,
      },
      {
        id: 2,
        profile: {
          username: "beta",
          email: "beta@mail.dev",
        },
        activity: {
          posts: 3,
          likes: 45,
        },
        isAdmin: false,
      },
    ],
  },
};

// [1]

let {
  users: [
    {
      id,
      profile: { username, email },
      activity: { posts, likes },
    },
  ],
} = apiResponse.data;

let readableContent = `userId: ${id} \nUsername: ${username} \nUserEmail: ${email} \nPost: ${posts} Likes: ${likes} \n`;
console.log(readableContent);

// [2]

let {
  users: [
    {
      profile: { username: nameUser },
      activity: { posts: post },
    },
  ],
} = apiResponse.data;

let userPost = `User: ${nameUser} \nPost ${post} \n `;
console.log(userPost);

//[3]

const publicUser = {
  username: apiResponse.data.users[0].profile.username,
  post: apiResponse.data.users[0].activity.posts,
};

console.log(publicUser);
