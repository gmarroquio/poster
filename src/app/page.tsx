"use client";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
//import { serialize } from "next-mdx-remote/serialize";
import { Button } from "@/components/button";
import Tweet from "@/components/tweet";
import { CopyButton } from "@/components/copy-button";

export default function Home() {
  const [post] = useState<
    | {
        title: string;
        text: string;
        keywords: string;
        description: string;
        tweet: string;
      }
    | undefined
  >();
  const [mdx] = useState<any>();

  return (
    <div className="px-2 py-4 space-y-2 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        action={async () => {
          console.log("gerando post");
          // const res = await fetch("/api/post", {
          //   method: "POST",
          //   body: JSON.stringify({
          //     subject: args.get("subject"),
          //     concept: args.get("concept"),
          //     keywords: (args.get("keywords") as string).split(","),
          //   }),
          // });
          // if (res.ok) {
          //   const body = await res.json();
          //   const source = await serialize(body.text);
          //   setPost(body);
          //   setMdx(source);
          // }
        }}
        className="flex w-full md:w-xl flex-col items-center justify-center bg-gray-100"
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Blog Post Generator
        </h1>
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md space-y-2">
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Subject Description:
            </label>
            <input
              required
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='The main topic (e.g., "Home Coffee Brewing")'
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Concept:
            </label>
            <textarea
              required
              id="concept"
              name="concept"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder='The underlying idea or type of product/service to promote subtly (e.g., "using fresh beans").'
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Keywords: (optional)
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="A list of keywords to target. (comma separated)"
            />
          </div>
          <Button>Generate post</Button>
        </div>
      </form>

      {post && (
        <>
          <Tweet tweet={post.tweet} />
          <article className="mx-auto prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
            <h1>{post.title}</h1>
            <CopyButton text={post.text}>Copy Post</CopyButton>
            <p>{post.description}</p>
            <p className="sr-only">{post.keywords}</p>
            <MDXRemote {...mdx} />
          </article>
        </>
      )}
    </div>
  );
}
