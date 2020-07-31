const axios = require("axios");

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
    user: async (_, { token }) => {
      const url = `https://graph.instagram.com/me?fields=id,username,media_count&access_token=${token}`;
      const result = await axios.get(url);
      return {
        name: result.data.username || "",
        id: result.data.id || 1,
        mediaCount: result.data.media_count,
      };
    },
    media: async (_, { token }) => {
      const url = `https://graph.instagram.com/me/media?fields=caption,permalink,timestamp,media_url&access_token=${token}`;
      const result = await axios.get(url);
      return result.data.data;
    }
  },
};
module.exports = resolvers;
