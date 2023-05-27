import { gql } from '@apollo/client';

// Query to get users
export const GET_CONTACT = gql`
  query contact {
    contact {
      _id
      firstName
      lastName
      email
      message
    }
  }
`;

