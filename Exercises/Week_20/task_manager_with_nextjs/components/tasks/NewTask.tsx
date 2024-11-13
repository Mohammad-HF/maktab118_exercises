import { CancelButton } from "./CancelButton";
import { GiNotebook } from "react-icons/gi";
import { Input } from "../L&S/Input";
import { RadioInput } from "./RadioInput";
import {
  addNewTaskService,
  editTaskService,
} from "@/apis/server-side-apis/tasks_service";

export const NewTask: React.FC<{
  showHandle: () => void;
  isEdit: boolean;
  task?: ITask;
}> = ({ showHandle, isEdit, task }) => {
  const handleSubmit: (formData: FormData) => void = (data) => {
    isEdit && task ? editTaskService(data,task.id) : addNewTaskService(data);
    showHandle();
  };
  return (
    <div
      className="relative z-10"
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
            action={handleSubmit}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
          >
            <div className="bg-[#fdcfd0] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:flex-col  sm:gap-y-5 ">
                <div className="flex gap-x-1  items-center justify-center rounded-md bg-[#fd9fa1] px-2">
                  <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                    <GiNotebook className="size-10 " />
                  </div>
                  <h3
                    className="text-base text-center sm:text-lg font-semibold text-slate-900"
                    id="modal-title"
                  >
                    add new Task
                  </h3>
                </div>
                <div className="flex flex-col gap-y-3 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <RadioInput
                    value={isEdit ? task?.priority : undefined}
                    label="Level of Priority"
                    name="priority"
                    select={[
                      "high_priority",
                      "medium_priority",
                      "low_priority",
                    ]}
                  />
                  {isEdit && (
                    <RadioInput
                      value={
                        isEdit && task?.completed === true
                          ? "yes"
                          : isEdit && task?.completed === false
                          ? "no"
                          : undefined
                      }
                      label="Is Completed"
                      name="completed"
                      select={["no", "yes"]}
                    />
                  )}
                  <Input
                    value={isEdit ? task?.title : undefined}
                    label="Title"
                    name="title"
                  />
                  <Input
                    value={isEdit ? task?.description : undefined}
                    label="Description"
                    name="description"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#fdcfd0] border-t-2 border-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                {isEdit ? "Edit" : "Add Task"}
              </button>
              <CancelButton showHandle={showHandle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
