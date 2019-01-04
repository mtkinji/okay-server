const express = require('express')
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typedefs')

/* ------ Connect to MongoDB via Mongoose ----- */
mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/okay?retryWrites=true', { useNewUrlParser: true } );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas')
});

/* ---------- Express ---------- */
const app = express()
app.get('/', (req, res) => res.sendStatus(200))
app.use(express.static('public'))

const server = new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({app});

app.listen({port: 3000}, () =>
  console.log(`Server ready at http://localhost:3000${server.graphqlPath}`)
)

