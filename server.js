require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users.utils";
import client from "./client";

const app = express();
const PORT = process.env.PORT || 3000;
app.use("/static", express.static("uploads"));
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});
server.start().then(() => {
  server.applyMiddleware({ app });
});
app.listen({ port: PORT }, () => {
  console.log(
    `🚀 Server is running on http://localhost:${PORT}${server.graphqlPath} ✅`
  );
});
