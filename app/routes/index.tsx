import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Remix</h1>
      <ul className="list-disc">
        <li>
          <Link to="posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}
