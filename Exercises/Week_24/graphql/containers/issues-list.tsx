"use client";

import { useMutation, useQuery } from "@apollo/client";
import { fetchIssuesQuery } from "@/gql/queries/issues";
import { CreateIssue } from "./createIssue";
import { DeleteIssueMutation } from "@/gql/mutations/issues";

export const IssuesListContainer: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<{ issues: Array<Issue> }>(
    fetchIssuesQuery
  );
  const [deleteIssue] = useMutation(DeleteIssueMutation);

  const deleteIssueHandler = (id : string)=>{
    const responst = deleteIssue({variables:{deleteIssueId : id}})
    refetch()
  }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data?.issues);
  return (
    <div className="flex flex-col p-10 gap-y-5 px-4 py-10 ">
      <CreateIssue refresh={() => refetch()} />
      <div className="bg-gray-300 rounded-md px-6 py-4 space-y-2">
        <h2 className="font-bold text-center pt-1 pb-2 border-b-2 border-b-black/70">
          BackLog Issues
        </h2>
        <div className="grid grid-cols-4 mt-3">
          <h2 className="font-semibold">Name</h2>
          <h2 className="font-semibold">Content</h2>
          <h2 className="font-semibold">Status</h2>
          <button className="font-semibold  ">Action</button>
        </div>
        {(data?.issues || []).map(
          (el, index) =>
            el.status === "BACKLOG" && (
              <div className="grid grid-cols-4 " key={index}>
                <h2>{el.name}</h2>
                <h2>{el.content}</h2>
                <h2>{el.status}</h2>
                <button onClick={()=>deleteIssueHandler(el.id)} className="font-semibold block bg-red-300 hover:bg-red-400 rounded-md">eete</button>
              </div>
            )
        )}
      </div>
      <div className="bg-gray-300 rounded-md px-6 py-4 space-y-2">
        <h2 className="font-bold text-center pt-1 pb-2 border-b-2 border-b-black/70">
          Inprogress Issues
        </h2>
        <div className="grid grid-cols-4 mt-3">
          <h2 className="font-semibold">Name</h2>
          <h2 className="font-semibold">Content</h2>
          <h2 className="font-semibold">Status</h2>
          <button className="font-semibold  ">Action</button>
        </div>
        {(data?.issues || []).map(
          (el, index) =>
            el.status === "INPROGRESS" && (
              <div className="grid grid-cols-4 " key={index}>
                <h2>{el.name}</h2>
                <h2>{el.content}</h2>
                <h2>{ el.status}</h2>
                <button onClick={()=>deleteIssueHandler(el.id)} className="font-semibold block bg-red-300 hover:bg-red-400 rounded-md">delete</button>
              </div>
            )
        )}
      </div>
      <div className="bg-gray-300 rounded-md px-6 py-4 space-y-2">
        <h2 className="font-bold text-center pt-1 pb-2 border-b-2 border-b-black/70">
          Done Issues
        </h2>
        <div className="grid grid-cols-4 mt-3">
          <h2 className="font-semibold">Name</h2>
          <h2 className="font-semibold">Content</h2>
          <h2 className="font-semibold">Status</h2>
          <button className="font-semibold block ">Action</button>
        </div>
        {(data?.issues || []).map(
          (el, index) =>
            el.status === "DONE" && (
              <div className="grid grid-cols-4 " key={index}>
                <h2>{el.name}</h2>
                <h2>{el.content}</h2>
                <h2>{ el.status}</h2>
                <button onClick={()=>deleteIssueHandler(el.id)} className="font-semibold block bg-red-300 hover:bg-red-400 rounded-md">delete</button>
              </div>
            )
        )}
      </div>
    </div>
  );
};
