"use client";
import { useQuery } from "@/lib/convex/client";
import { api } from "@/lib/convex";
import { Loading } from "@/components/loading";

export default function Home() {
  const { pending, data: posts, error } = useQuery(api.posts.get);

  if (pending) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading posts</div>;
  }

  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-2">
      {posts.map(({ _id, title, description, cover }) => (
        <article
          key={_id}
          className="mx-auto border-gray-200 px-4 py-2 rounded-md border"
        >
          <div>{cover}</div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{description}</p>
        </article>
      ))}
    </main>
  );
}
