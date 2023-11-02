import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeCoffeShops(lastId: Int): [CoffeeShop]
  }
`;
