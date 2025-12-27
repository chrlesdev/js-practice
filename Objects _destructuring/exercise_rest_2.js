const apiResponse = {
  status: "ok",
  data: {
    post: {
      id: 99,
      title: "Deep JavaScript",
      content: "Lorem ipsum...",
      author: {
        id: 7,
        username: "NightCoder",
        email: "night@code.dev",
        role: "admin",
      },
      stats: {
        views: 1200,
        likes: 340,
        comments: 27,
      },
      isPublished: true,
    },
  },
};

const {
  post: {
    id,
    title,
    content,
    author: { username },
    stats: { views, likes, comments },
    ...rest
  },
} = apiResponse.data;

const normalizedPost = {
  identity: { postId: id, title: title, authorNmae: username },
  metrics: { views: views, likes: likes, comments: comments },
  flags: { ...rest },
};

console.log(normalizedPost);
