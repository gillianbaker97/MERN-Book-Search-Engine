import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            email
            password
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($_id: String!, $username: String!, $email: String!, $password: String!) {
        addUser(_id: $_id, username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;



export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!, $authors: Array!, $description: String!, $title: String!, $image: String!, link: String!) {
        saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!, $authors: Array!, $description: String!, $title: String!, $image: String!, link: String!) {
        removeBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;
