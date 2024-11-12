import { NewTaskButton } from "@/components/tasks/NewTaskButton";

const Tasks: React.FC = () => {
  return (
    <div className="grid gap-y-4 p-4">
      <div className="flex gap-x-4">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <NewTaskButton />
      </div>
      <div className="border rounded-md">
        <h2 className="text-lg font-semibold">high priority</h2>
      </div>
      <div className="border rounded-md">
        <h2 className="text-lg font-semibold">medium priority</h2>
      </div>
      <div className="border rounded-md">
        <h2 className="text-lg font-semibold">low priority</h2>
      </div>
    </div>
  );
};
export default Tasks;
