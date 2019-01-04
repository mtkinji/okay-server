const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getObservations: [Observation]
  }

  type Mutation {
    createUser(
      organziationId: String, firstName: String!, lastName: String!, email: String!, streetAddress: String, city: String, state: String, zip: String, country: String
    ): User
    
    createObservation(
      title: String!, observation: String!, ownerId: String!, fileType: String, fileLocation: String, researchMethod: String, experienceVector: String, emotions: [String], frequency: String, magnitude: String, props: [String], journey: String, involvedParties: [String]
    ): Observation
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

  type Observation {
    id: ID
    title: String!
    observation: String!
    ownerId: String!
    fileType: String
    fileLocation: String
    researchMethod: String
    experienceVector: String
    emotions: [String]
    frequency: String
    magnitude: String
    props: [String]
    journey: String
    involvedParties: [String]
  }

`;

module.exports = typeDefs