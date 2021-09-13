const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Integer
        savedBooks: Array!
    }

    type Book {
        bookId: String!
        authors: Array!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth {
        token: String!
        user: String!
    }

    type Query {
        Me: [ User ]
        me(_id: String): [ User ]
    }

    type Mutation {
        login(email: String, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: Array!, description: String!, bookId: String!, image: String!, link: String!, title: String!): User
        removeBook(bookId: String!) : User
    }
`;

module.exports = typeDefs.definitions;