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
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            return newUser;
        },

        saveBook: async(parent, args) => {
            const newBook = await Book.save(args);
            return newBook;
        },

        removeBook: async(parent, args) => {
            const noBook = await Book.deleteOne(args);
            return noBook;
        }
    },
};

module.exports = resolvers;
