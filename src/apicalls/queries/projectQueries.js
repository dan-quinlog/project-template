export const listProjects = /* GraphQL */ `
  query ListProjects($limit: Int, $nextToken: String) {
    listProjects(limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
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

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      description
      tags
      createdAt
      updatedAt
      react01
      react02
      react03
      react04
      react05
      react06
      threads {
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
      }
    }
  }
`;

export const getFeaturedProject = /* GraphQL */ `
  query ListProjectsWithLatestThread($limit: Int) {
    listProjects(limit: $limit) {
      items {
        id
        title
        description
        tags
        createdAt
        updatedAt
        threads(limit: 1, sortDirection: DESC) {
          items {
            id
            headline
            content
            createdAt
          }
        }
      }
    }
  }
`;

export const getProjectsByTag = /* GraphQL */ `
  query GetProjectsByTag($tag: String!, $limit: Int, $nextToken: String) {
    listProjects(filter: {tags: {contains: $tag}}, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
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
