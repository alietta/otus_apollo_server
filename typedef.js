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
  type Media {
    caption: String
    permalink: String
    timestamp: String
    id: String
  }
  # (A "Mutation" type will be covered later on.)
  type Query {
    photos(test: Boolean): [Photo]
    user(token: String): User
    media(token: String): [Media]
  }
`;

module.exports = typeDefs;
