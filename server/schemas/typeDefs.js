const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    stories: [Story]
    friends: [User]
  }

  type Story {
    _id: ID
    storyTitle: String
    storyText: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    stories(username: String): [Story]
    story(_id: ID!): Story
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addStory(storyTitle: String!, storyText: String!): Story
  }
`;

module.exports = typeDefs;
