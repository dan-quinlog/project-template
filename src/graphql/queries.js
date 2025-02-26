/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      postedDate
      updatedDate
      tags
      description
      reactions
      threads {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        postedDate
        updatedDate
        tags
        description
        reactions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getThread = /* GraphQL */ `
  query GetThread($id: ID!) {
    getThread(id: $id) {
      id
      headline
      postedDate
      updatedDate
      tags
      content
      projectID
      project {
        id
        title
        postedDate
        updatedDate
        tags
        description
        reactions
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      projectThreadsId
      __typename
    }
  }
`;
export const listThreads = /* GraphQL */ `
  query ListThreads(
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        headline
        postedDate
        updatedDate
        tags
        content
        projectID
        createdAt
        updatedAt
        projectThreadsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const threadsByProjectID = /* GraphQL */ `
  query ThreadsByProjectID(
    $projectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    threadsByProjectID(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        headline
        postedDate
        updatedDate
        tags
        content
        projectID
        createdAt
        updatedAt
        projectThreadsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
