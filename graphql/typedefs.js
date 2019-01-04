const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(organziationId: String, firstName: String!, lastName: String!, email: String!, streetAddress: String, city: String, state: String, zip: String, country: String): User
  }

  type User {
    id: ID
    organizationId: String
    firstName: String!
    lastName: String!
    email: String!
    streetAdress: String
    city: String
    state: String
    zip: String
    country: String
    createdAt: String
    updatedAt: String
  }

`;

module.exports = typeDefs