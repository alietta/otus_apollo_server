const photos = [
  {
    author: "🐈 Nala",
    url:
      "https://cataas.com/cat/cute/says/Apollo%20is%20awesome?size=50&color=magenta",
    comments: [
      {
        author: "Coco",
        text: "Meow meow",
      },
      {
        author: "Gracie",
        text: "Meow meow meow",
      },
    ],
  },
  {
    author: "🐱 Loki",
    url:
      "https://cataas.com/cat/cute/says/GraphQL%20is%20awesome?size=50&color=magenta",
    comments: [
      {
        author: "Jasper",
        text: "Meow",
      },
      {
        author: "Oreo",
        text: "Meow meow",
      },
      {
        author: "Tiger",
        text: "Meow",
      },
    ],
  },
];
const resolvers = {
  Query: {
    photos: async (_, { test }) => {
      const result = await new Promise((res) =>
        setTimeout(() => {
          res(test ? [photos[0]] : photos);
        }, 2000)
      );
      console.log(result);
      return result;
    },
  },
};

module.exports = resolvers;
