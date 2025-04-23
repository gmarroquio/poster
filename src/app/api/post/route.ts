import { createPost } from "@/lib/post";

export async function POST(req: Request) {
  const body = (await req.json()) as {
    subject: string;
    concept: string;
    keywords: string[] | undefined;
  };

  const post = await createPost(body.subject, body.concept, body.keywords);
  return Response.json(JSON.parse(post));
}
