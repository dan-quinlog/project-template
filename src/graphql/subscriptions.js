/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      title
      tags
      description
      react01
      react02
      react03
      react04
      react05
      react06
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      title
      tags
      description
      react01
      react02
      react03
      react04
      react05
      react06
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      title
      tags
      description
      react01
      react02
      react03
      react04
      react05
      react06
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
export const onCreateThread = /* GraphQL */ `
  subscription OnCreateThread($filter: ModelSubscriptionThreadFilterInput) {
    onCreateThread(filter: $filter) {
      id
      headline
      tags
      content
      react01
      react02
      react03
      react04
      react05
      react06
      projectID
      project {
        id
        title
        tags
        description
        react01
        react02
        react03
        react04
        react05
        react06
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateThread = /* GraphQL */ `
  subscription OnUpdateThread($filter: ModelSubscriptionThreadFilterInput) {
    onUpdateThread(filter: $filter) {
      id
      headline
      tags
      content
      react01
      react02
      react03
      react04
      react05
      react06
      projectID
      project {
        id
        title
        tags
        description
        react01
        react02
        react03
        react04
        react05
        react06
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteThread = /* GraphQL */ `
  subscription OnDeleteThread($filter: ModelSubscriptionThreadFilterInput) {
    onDeleteThread(filter: $filter) {
      id
      headline
      tags
      content
      react01
      react02
      react03
      react04
      react05
      react06
      projectID
      project {
        id
        title
        tags
        description
        react01
        react02
        react03
        react04
        react05
        react06
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
