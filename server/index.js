const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./src/generated/prisma-client')
const Mutation=require('./src/Resolvers/Mutation')
const Query=require('./src/Resolvers/Query');
const User=require("./src/Resolvers/User");
const Quote=require("./src/Resolvers/Quote")

const resolvers={
  Mutation,
  Query,
  User,
  Quote
}

const server = new GraphQLServer({
  typeDefs:'./src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))