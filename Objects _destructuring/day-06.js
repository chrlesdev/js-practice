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
console.log(premiumStatus);

let {
  stats: { hp, mp },
} = player;

let rank = player.rank;
console.log(rank ? rank : "rookie");
