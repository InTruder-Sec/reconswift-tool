import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
    active: Boolean
  }

  input NewUserInput {
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
  }

  type Query {
    Users: [User]
  }
  type Mutation {
    createUser(input: NewUserInput!): User
  }
`;

export { typeDefs };
