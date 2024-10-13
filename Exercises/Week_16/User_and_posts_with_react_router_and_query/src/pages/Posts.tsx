import { AllPosts } from "../containers/AllPosts";

export const Posts: React.FC = () => {
  return (
    <div className="max-w-[900px] mx-auto ">
      <div className="border-b-4 border-b-appBlue pb-4">
      <h1 className="text-3xl font-bold text-appBlue py-2">All Posts From All Users</h1>
      <p className="text-appBlue font-bold">for more post scroll down to bottom of the page</p>
      </div>
      <AllPosts />
    </div>
  );
};
