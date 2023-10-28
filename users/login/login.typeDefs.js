import { gql } from "apollo-server";
import { jwt } from "jsonwebtoken";

export default gql`
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    login(username: String!, password: String!): LoginResult!
  }
`;
