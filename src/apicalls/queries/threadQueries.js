export const listThreads = /* GraphQL */ `
  query ListThreads($limit: Int, $nextToken: String) {
    listThreads(limit: $limit, nextToken: $nextToken) {
      items {
        id
        headline
        content
        tags
        createdAt
        updatedAt
        react01
        react02
        react03
        react04
        react05
        react06
        projectID
      }
      nextToken
    }
  }
`;

export const getThreadsByProject = /* GraphQL */ `
  query GetThreadsByProject($projectID: ID!, $sortDirection: ModelSortDirection, $limit: Int, $nextToken: String) {
    threadsByProjectID(projectID: $projectID, sortDirection: $sortDirection, limit: $limit, nextToken: $nextToken) {
      items {
        id
        headline
        content
        tags
        createdAt
        updatedAt
        react01
        react02
        react03
        react04
        react05
        react06
      }
      nextToken
    }
  }
`;

export const getThread = /* GraphQL */ `
  query GetThread($id: ID!) {
    getThread(id: $id) {
      id
      headline
      content
      tags
      createdAt
      updatedAt
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
      }
    }
  }
`;
