import { NewTaskButton } from "@/components/tasks/NewTaskButton";

const Tasks: React.FC = () => {
  return (<div className="p-4 bg-[#fdcfd0] ">
    <div className="flex gap-x-4 h-fit mb-2">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <NewTaskButton />
      </div>
        <div className="grid gap-y-4  min-h-[calc(100vh-200px)]">
      <div className="border border-white p-2 rounded-md">
        <h2 className="text-lg font-semibold">high priority</h2>
      </div>
      <div className="border border-white p-2 rounded-md">
        <h2 className="text-lg font-semibold">medium priority</h2>
      </div>
      <div className="border border-white p-2 rounded-md">
        <h2 className="text-lg font-semibold">low priority</h2>
      </div>
    </div>
    </div>
  );
};
export default Tasks;
