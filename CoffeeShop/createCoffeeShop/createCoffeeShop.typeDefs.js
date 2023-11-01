import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createCoffeeShop(
      name: String!
      categoryGrup: String
      latitude: String
      longitude: String
    ): CoffeeShop
  }
`;
