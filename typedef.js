const { gql } = require("apollo-server");

const typeDefs = gql`
  type Comment {
    author: String
    text: String
  }
  type Photo {
    author: String
    url: String
    comments: [Comment]
  }
  type User {
    name: String
    id: Int
    mediaCount: Int
  }
  type Post {
    caption: String
    permalink: String
    timestamp: String
    media_url: String
    id: String
  }
  type Media {
    posts: [Post]
    cursor: Cursor
  }
  type Cursor {
    before: String
    after: String
  }
  # (A "Mutation" type will be covered later on.)
  type Query {
    photos(test: Boolean): [Photo]
    user(token: String): User
    media(token: String, after: String, before: String, limit: Int): Media
  }
`;

module.exports = typeDefs;
