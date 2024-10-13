import { AllPosts } from "../containers/AllPosts";

export const Posts: React.FC = () => {
  return (
    <div className="bg-appTeal min-h-screen">
        <div className="max-w-[700px] mx-auto pt-10">
        <AllPosts />
        </div>

    </div>
  );
};
