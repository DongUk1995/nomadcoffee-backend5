import { gql } from "apollo-server-express";

export default gql`
  type seeCoffeeShopsResult {
    ok: Boolean!
    error: String
    photos: [CoffeShopPhoto]
  }
  type Query {
    seeCoffeeShops(name: String!, lassId: Int): seeCoffeeShopsResult
  }
`;
