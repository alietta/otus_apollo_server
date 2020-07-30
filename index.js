const { ApolloServer } = require("apollo-server");
const axios = require("axios");
const typeDefs = require("./typedef");
const resolvers = require("./resolvers");




const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🐱  Server ready at ${url}`);
});
