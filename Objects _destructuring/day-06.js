const player = {
  username: "NightCoder",
  level: 12,
  isPremium: false,
  stats: {
    hp: 120,
    mp: 80,
    stamina: 60,
  },
};

let username = player.username;
let level = player.level;

let { isPremium: premiumStatus } = player;
// console.log(premiumStatus);

let {
  stats: { hp, mp },
} = player;

let rank = player.rank;
// console.log(rank ? rank : "rookie");

function printSummary(input) {
  let {
    username,
    level,
    stats: { hp, mp },
  } = input;
  return `${username} (Level ${level}) - HP: ${hp}, MP: ${mp}`;
}

// console.log(printSummary(player));

//---

const coords = [10, 20];

// const [x, y] = coords;
const [y, x] = coords; //<-- same value but wrong meaning
// console.log(coords);

//exercise
/**
 * 1️⃣ Object destructuring

Extract status from response.

2️⃣ Array destructuring

Extract only the first post from data.

3️⃣ Nested destructuring

From the first post, extract:

title

likes (from stats)

4️⃣ Function challenge

Write a function printPostSummary that:

Takes one post object

Uses destructuring in the parameter

Returns this format:
Learn JavaScript - 120 likes
 

*/

const response = {
  status: 200,
  data: [
    {
      id: 1,
      title: "Learn JavaScript",
      stats: { likes: 120, comments: 30 },
    },
    {
      id: 2,
      title: "Understand Destructuring",
      stats: { likes: 250, comments: 80 },
    },
  ],
};

let { status: responsStatus } = response;
// console.log(responsStatus);

let { data } = response;
let [{ id: ids, title: titles, stats }] = data;

// console.log(`${ids}, ${titles}, ${stats}`);

let {
  data: [
    {
      id,
      title,
      stats: { likes, comments },
    },
  ],
} = response;
// console.log(`the first data is: id: ${id}, title: ${title}, likes: ${likes}, comment: ${comments}`);

function printPostSummary([
  {
    title,
    stats: { likes },
  },
]) {
  return `${title} - ${likes}`;
}

// console.log(printPostSummary(response.data));
// -----
// spread / ...

const user = {
  id: 1,
  name: "Charles",
  role: "admin",
  lastLogin: "today",
};

const { names, ...rest } = user;

// console.log(name); // "Charles"
// console.log(rest);
/*
{
  id: 1,
  role: "admin",
  lastLogin: "today"
}
*/

const baseUser = { name: "Charles", level: 7 };
const upgradedUser = { ...baseUser, level: 8 };

// console.log(upgradedUser);

const scores = [100, 95, 90, 85];

const [first, second, ...others] = scores;

// console.log(first); // 100
// console.log(second);
// console.log(others); // [95, 90, 85]

//Final Exercise: Data Surgery
/**
1️⃣ Extract name and email
2️⃣ Put everything else into a variable called metadata
3️⃣ Create a new object called publicUser that:
      - contains name
      - contains stats
      - does not contain email or role

Rules:
  - No mutation
  - No manual copying
  - Use rest and spread
 */

const users = {
  id: 1,
  name: "NightCoder",
  email: "night@code.dev",
  role: "admin",
  statsA: {
    posts: 12,
    likes: 340,
  },
};

let { name: nameA, email } = users;
// console.log(nameA, email);

let metadata = { ...users };
// console.log(metadata);

const { name, email: emails } = users;

const publicUser = {
  name: users.name,
  stats: users.statsA,
};

// console.log(publicUser);

//-----
const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 7,
      username: "NightCoder",
      email: "night@code.dev",
      role: "admin",
      stats: {
        posts: 12,
        likes: 340,
      },
    },
    token: "secret-token-123",
  },
};

/**
 * Your tasks (this is the whole workout):

- Destructure username and email from the user.
- Destructure posts from stats.
- Create a new object called publicUser that contains:
    - username
    - posts

❌ Do NOT include email, role, or token.

No loops. No conditionals. Just objects & destructuring.
 */

// 1.
let { username: nameUser, email: userEmail } = apiResponse.data.user;

console.log(nameUser, userEmail);

//2.
let { data: datas } = apiResponse;
let { user: userData } = datas;
let {
  stats: { posts },
} = userData;

console.log(posts);

//3.

const publicUsers = {
  usernamess: apiResponse.data.user.username,
  posts: apiResponse.data.user.stats.posts,
};

console.log(publicUsers);
