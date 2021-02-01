import { ApolloServer } from "apollo-server";
import NasaNeoAPI from "./data-sources/NasaNeoAPI";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      nasaNeoApi: new NasaNeoAPI(),
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
