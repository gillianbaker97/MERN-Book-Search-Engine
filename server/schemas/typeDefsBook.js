const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!
        name: String!
    }

    type Matchup {
        _id: ID!
        authors: String!
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type Query {
        book: [Book]
        matchups(_id: String): [Matchup]
    }

    type Mutation {
        link: String!
        createMatchup(authors: String!, description: String!, bookId: String!, image: String!, link: String!, title: String!): Matchup
    }
`;

module.exports = typeDefs;