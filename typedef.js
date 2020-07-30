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
  # (A "Mutation" type will be covered later on.)
  type Query {
    photos(test: Boolean): [Photo]
  }
`;

module.exports = typeDefs;
