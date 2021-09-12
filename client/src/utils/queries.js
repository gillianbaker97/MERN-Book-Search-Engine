import { gql } from '@apollo/client';

export const QUERY_BOOK = gql`
    query book ($_id: String){
        book(_id: $_id) {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
`;

export const QUERY_USER = gql`
    query user ($_id: String) {
        user(_id: $_id) {
            _id
            username
            email
            password
        }

    }
`;