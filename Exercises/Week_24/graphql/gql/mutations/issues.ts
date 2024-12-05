import { gql } from "@apollo/client";

export const CreateIssueMutaion = gql`
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      createdAt
    }
  }
`;

export const DeleteIssueMutation = gql`
  mutation DeleteIssue($deleteIssueId: ID!) {
    deleteIssue(id: $deleteIssueId)
  }
`;
