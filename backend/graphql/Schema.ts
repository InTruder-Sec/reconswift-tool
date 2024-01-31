import { buildSchema } from "graphql";

var schema = buildSchema(`

    type error {
        status: Int!
        message: String!
    }

    type UserData {
        _id: String!
        email: String!
        scans: [Scan]
    }

    type ReturnData {
        data: UserData!
        error: error
    }

    type Scan {
        _id: String!
        target: String!
        url: String!
    }

    type ReturnScan {
        data: Scan!
        error: error
    }

    type Mutation {
        createAccount(email: String!, password: String!): ReturnData
    }

    type Query {
        getUser(token: String!): ReturnData
        getScan(id: String!):  ReturnScan
    }
`);

export default schema;
