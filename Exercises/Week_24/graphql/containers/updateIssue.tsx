import { Button } from "@/components/btn";
import { Input } from "@/components/input";
import { UpdateIssueMutaion } from "@/gql/mutations/issues";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const UpdateIssueStatus: React.FC<{
  refresh: () => void;
  id: string;
  orgValue: string;
}> = ({ refresh, id, orgValue }) => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [value, setValue] = useState<IUpdateIssue>({ status: "" });
  const [updateIssue] = useMutation<IUpdateIssueDto>(UpdateIssueMutaion);
  const { push } = useRouter();

  const updateIssueHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await updateIssue({
        variables: { input: { status: value.status, id } },
      });
      refresh();
      push("/");
      setShowButton((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowButton((prev) => !prev)}
        className="font-semibold block bg-blue-300 hover:bg-blue-400 px-2 py-1 rounded-md"
      >
        update
      </button>

      <div
        className={`relative z-10 ${!showButton && "hidden"}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <form
              onSubmit={updateIssueHandler}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
            >
              <div className="bg-gray-300 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:flex-col  sm:gap-y-5 ">
                  <div className="flex gap-x-1  items-center justify-center rounded-md bg-gray-400 px-2 mb-3">
                    <h3
                      className="text-base text-center sm:text-lg font-semibold text-slate-900 py-1"
                      id="modal-title"
                    >
                      update Issue
                    </h3>
                  </div>
                  <Input
                    defaultValue={orgValue}
                    type="text"
                    label="Status ( DONE | INPROGRESS | BACKLOG )"
                    onChange={(e) =>
                      setValue({ ...value, status: e.target.value })
                    }
                  />
                  <div className="bg-gray-300   px-4 py-3 flex flex-col  sm:flex-row-reverse sm:px-6 gap-y-2">
                    <button
                      type="submit"
                      className=" w-full  rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 "
                    >
                      Update
                    </button>
                    <Button
                      type="button"
                      className="w-full sm:w-auto px-6"
                      onClick={() => setShowButton((prev) => !prev)}
                    >
                      {" "}
                      cancel
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
