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
    coffeeshops: [CoffeeShop]
    totalFollowing: Int!
    totalFollowers: Int!
    githubUsername: String
    isMe: Boolean!
    isFollowing: Boolean!
    createdAt: String
    updatedAt: String
  }
`;
