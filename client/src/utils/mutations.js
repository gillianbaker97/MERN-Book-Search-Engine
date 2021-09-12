import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
    mutation createBook($authors: String!, $description: String!, $title: String!, $image: String!, $link: String!) {
        createBook(authors: $authors, description: $description, title: $title, image: $image, link: $link) {
            _id
            authors
            description
            title
            image
            link
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($_id: String!, $username: String!, $email: String!, $password: String!) {
        createUser(_id: $_id, username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;