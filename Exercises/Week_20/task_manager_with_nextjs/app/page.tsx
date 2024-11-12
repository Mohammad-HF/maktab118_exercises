import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4">
      <h2>home page</h2>
      <Link href={"tasks"}>
      <button className="border px-2 rounded-sm bg-gray-300">
        Go to Tasks
      </button>
      </Link>
    </div>
  );
}
