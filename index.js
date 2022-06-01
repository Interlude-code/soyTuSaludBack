import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs , resolvers } from './graphql/index.js';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 5000 }, async () => {
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});