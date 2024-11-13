
export const MediumPriority: React.FC<{ tasks: ITask[] | undefined }> = ({
  tasks,
}) => {

  return (
    <div
      className={`${tasks === undefined ? "hidden" : "grid"} gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {tasks?.map((item) => ( item.priority === "medium_priority" &&
        <div key={item.id} className="bg-[#fd9fa1] rounded-md p-2 w-full">
          <h2 className="font-semibold">{item.title}</h2>
          <h2 className="text-black/70">{item.description}</h2>
          <div className="flex justify-between">
          <p className="bg-[#fcc387] text-sm border w-fit rounded-sm px-2 text-white mt-2">
            {item.priority}
          </p>
          <p className={`${item.completed === true ? "bg-green-300" : "bg-yellow-200"}  text-sm border w-fit rounded-sm px-2  mt-2`}>
            {item.completed === true ? "completed" : "in progress"}
          </p>
          </div>
        </div>
      ))}
    </div>
  );
};
