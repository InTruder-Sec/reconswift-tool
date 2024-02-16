import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    profile_picture: String!
    scanHistory: [String]
  }

  

  type Query {
    Users: [User]
  }
  type Mutation {
  }
`;

export { typeDefs };
