const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Integer
        savedBooks: String!
    }

    type Book {
        bookId: String!
        authors: String!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type login {
        email: String!
        password: String!
    }

    type Query {
        Me: [ User ]
        me(_id: String): [ User ]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        saveBook(authors: String!, description: String!, bookId: String!, image: String!, link: String!, title: String!): Book
    }
`;

module.exports = typeDefs.definitions;