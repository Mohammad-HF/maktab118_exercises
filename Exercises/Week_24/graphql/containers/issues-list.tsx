"use client";

import { useQuery } from "@apollo/client";
import { fetchIssuesQuery } from "@/gql/queries/issues";
import { CreateIssue } from "./createIssue";
import { useState } from "react";

export const IssuesListContainer: React.FC = () => {
  const [refresh , setRefresh] = useState<boolean>(false)
  const { loading, error, data,refetch } = useQuery<{ issues: Array<Issue> }>(
    fetchIssuesQuery
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data?.issues);
  return (
    <div className="flex flex-col p-10 gap-y-5 px-4 py-10">
      <CreateIssue refresh={()=>refetch()}/>
      <div className="bg-gray-300 rounded-md px-4 py-2">
        <h2 className="font-semibold text-center pt-1 pb-2">BackLog Issues</h2>
        {(data?.issues || []).map(
          (el, index) =>
            el.status === "BACKLOG" && (
              <div className="grid grid-cols-3" key={index}>
                <h2>{el.name}</h2>
                <h2>{el.content}</h2>
                <h2>{el.status}</h2>
              </div>
            )
        )}
      </div>
      <div className="bg-gray-300 rounded-md px-4 py-2">
        <h2 className="font-semibold text-center pt-1 pb-2">
          Inprogress Issues
        </h2>
        {(data?.issues || []).map(
          (el, index) =>
            el.status === "INPROGRESS" && (
              <div className="grid grid-cols-3" key={index}>
                <h2>{el.name}</h2>
                <h2>{el.content}</h2>
                <h2>{el.status}</h2>
              </div>
            )
        )}
      </div>
      <div className="bg-gray-300 rounded-md px-4 py-2">
        <h2 className="font-semibold text-center pt-1 pb-2">Done Issues</h2>
        {(data?.issues || []).map(
          (el, index) =>
            el.status === "DONE" && (
              <div className="grid grid-cols-3" key={index}>
                <h2>{el.name}</h2>
                <h2>{el.content}</h2>
                <h2>{el.status}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};
