import { Input } from "../components/input";

export const Main: React.FC = () => {
  return (
    <div className="h-screen bg-appblue ">
      <div className="max-w-[1600px] mx-auto border-2 border-white p-4">
        <Input/>
      </div>
      <div className="max-w-[1600px] mx-auto border-2 border-white p-4 mt-2">
        <h2 className="text-2xl font-semibold text-blue-950 border-b-2 pb-4">
          Country is :{" "}
        </h2>
      </div>
    </div>
  );
};
