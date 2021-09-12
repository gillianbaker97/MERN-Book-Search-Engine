const { Book, User } = require('../models');

const resolvers = { 
    Query: {
        book: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Book.find(params);
        },
        user: async () => {
            return User.find({});
        },
    },
    Mutation: {
        createBook: async (parent, args) => {
            const newBook = await Book.create(args);
            return newBook;
        },
    },
};

module.exports = resolvers;
