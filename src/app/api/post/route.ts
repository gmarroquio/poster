import { createPost } from "@/lib/post";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/lib/convex";

export async function POST(req: Request) {
  const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  const body = (await req.json()) as {
    subject: string;
    concept: string;
    keywords: string[] | undefined;
  };

  const generatedPost = await createPost(
    body.subject,
    body.concept,
    body.keywords
  );
  const parsedPost = JSON.parse(generatedPost);
  await client.mutation(api.posts.post, parsedPost);
  return Response.json(parsedPost);
}
