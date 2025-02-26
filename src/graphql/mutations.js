/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createThread = /* GraphQL */ `
  mutation CreateThread(
    $input: CreateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    createThread(input: $input, condition: $condition) {
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
export const updateThread = /* GraphQL */ `
  mutation UpdateThread(
    $input: UpdateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    updateThread(input: $input, condition: $condition) {
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
export const deleteThread = /* GraphQL */ `
  mutation DeleteThread(
    $input: DeleteThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    deleteThread(input: $input, condition: $condition) {
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
