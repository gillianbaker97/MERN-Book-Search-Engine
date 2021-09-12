const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
    }

    type Matchup {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        book: [ Book ]
        matchups(_id: String): [Matchup]
    }

    type Mutation {
        createMatchup(username: String!, email: String!, password: String!): Matchup
    }
`;

module.exports = typeDefs.definitions;