export const createThread = /* GraphQL */ `
  mutation CreateThread($input: CreateThreadInput!) {
    createThread(input: $input) {
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
  }
`;

export const updateThread = /* GraphQL */ `
  mutation UpdateThread($input: UpdateThreadInput!) {
    updateThread(input: $input) {
      id
      headline
      content
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

export const deleteThread = /* GraphQL */ `
  mutation DeleteThread($input: DeleteThreadInput!) {
    deleteThread(input: $input) {
      id
    }
  }
`;

export const updateThreadReaction = /* GraphQL */ `
  mutation UpdateThreadReaction($id: ID!, $reactionField: String!, $value: Int!) {
    updateThread(input: {
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
