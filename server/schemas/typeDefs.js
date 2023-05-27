const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Contact {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    message: String!
  }


  type Query {
    contact: Contact

}

  type Mutation {
    addContact(firstName: String!, lastName: String!, email: String!, message: String!): Contact
  }

`;

module.exports = typeDefs;