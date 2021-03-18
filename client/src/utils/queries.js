import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_STORIES = gql`
  query stories($username: String) {
    stories(username: $username) {
      _id
      storyTitle
      storyText
      createdAt
      username
    }
  }
`;

export const QUERY_STORY = gql`
  query story($id: ID!) {
    story(_id: $id) {
      _id
      storyTitle
      storyText
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
      stories {
        _id
        storyTitle
        storyText
      }
  }
`;
