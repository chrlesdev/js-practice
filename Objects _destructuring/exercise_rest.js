const apiResponse = {
  status: "ok",
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
    ],
  },
};

//[1]

const {
  users: [
    {
      profile: { username },
      ...PrivateData
    },
  ],
} = apiResponse.data;

// console.log(getData(username, PrivateData));

//[2]

const {
  users: [
    {
      profile: { username: usernames },
      activity: { posts },
      ...rest
    },
  ],
} = apiResponse.data;

// console.log(`\n ${usernames},\n ${posts},\n`, rest);

//[3]

const [
  {
    id,
    profile: { username: mainUsername },
    activity,
    ...restData
  },
] = apiResponse.data.users;
const newObj = {
  identity: {
    id: id,
    username: mainUsername,
  },
  metrics: {
    posts: activity.posts,
    likes: activity.likes,
  },
  flag: { ...restData },
};

console.log(newObj);

/**
 * username: { apiResponse: { data: { users: [{ profile: { usernames } }] } } },
 *  metrics: {
    posts: { apiResponse: { data: { users: [{ activity: { post } }] } } },
    likes: { apiResponse: { data: { users: [{ activity: { likes } }] } } },
  },
  flags: { apiResponse: { data: { users, ...rest } } },
 */

// ----
