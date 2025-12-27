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
console.log(responsStatus);

let { data } = response;
let [{ id: ids, title: titles, stats }] = data;

console.log(`${ids}, ${titles}, ${stats}`);

let {
  data: [
    {
      id,
      title,
      stats: { likes, comments },
    },
  ],
} = response;
console.log(`the first data is: id: ${id}, title: ${title}, likes: ${likes}, comment: ${comments}`);

function printPostSummary([
  {
    title,
    stats: { likes },
  },
]) {
  return `${title} - ${likes}`;
}

console.log(printPostSummary(response.data));
