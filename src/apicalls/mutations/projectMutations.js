export const createProject = /* GraphQL */ `
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
  }
`;

export const updateProject = /* GraphQL */ `
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
      id
      title
      description
      tags
      updatedAt
      react01
      react02
      react03
      react04
      react05
      react06
    }
  }
`;

export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      id
    }
  }
`;

export const updateProjectReaction = /* GraphQL */ `
  mutation UpdateProjectReaction($id: ID!, $reactionField: String!, $value: Int!) {
    updateProject(input: {
      id: $id,
      [reactionField]: $value
    }) {
      id
      react01
      react02
      react03
      react04
      react05
      react06
    }
  }
`;
