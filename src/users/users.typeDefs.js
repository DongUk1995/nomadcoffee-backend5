import { gql } from "apollo-server";
export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String!
    location: String
    avatarURL: String
    following: [User]
    followers: [User]
    totalFollowing: Int!
    totalFollowers: Int!
    githubUsername: String
    shops: [CoffeeShop]
    isMe: Boolean!
    isFollowing: Boolean!
    createdAt: String
    updatedAt: String
  }
`;
