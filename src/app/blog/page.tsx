import { fetchQuery } from "convex/nextjs";
import { api } from "@/lib/convex";

export default async function Page() {
  const posts = await fetchQuery(api.posts.get);

  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-2">
      {posts?.map(({ _id, title, description, cover }) => (
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
