import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCoffeeShops(id: Int!, lastId: Int): CoffeeShop!
  }
`;
