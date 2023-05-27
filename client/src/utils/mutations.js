import { gql } from '@apollo/client';

// Mutation to add user
export const ADD_CONTACT = gql`
mutation addContact($firstName: String!, $lastName: String!, $email: String!, $message: String!) {
  addContact(firstName: $firstName, lastName: $lastName, email: $email, message: $message) {
    contact {
      _id
      firstName
      lastName
      email
      message
    }
  }
}
`;

