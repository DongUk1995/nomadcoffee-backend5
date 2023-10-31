import { gql } from "apollo-server-express";

export default gql`
  type CoffeShopPhoto {
    id: Int!
    url: String!
    shop: [CoffeeShop]
  }
  type CoffeeShop {
    id: Int!
    user: User!
    name: String
    latitude: String
    longitude: String
    photos: [CoffeShopPhoto]
    categories: [Category]
    createdAt: String!
    updatedAt: String!
  }

  type Category {
    id: Int!
    name: String!
    slug: String
    shops: [CoffeeShop]
    totalShops: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
