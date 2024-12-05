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
export const UpdateIssueMutaion = gql`
  mutation EditIssue($input: EditIssueInput!) {
    editIssue(input: $input) {
      createdAt
    }
  }
`;
