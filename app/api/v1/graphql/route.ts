import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "./_resolvers";
import { typeDefs } from "./_schema";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
