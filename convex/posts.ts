import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const post = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    keywords: v.string(),
    cover: v.string(),
    text: v.string(),
    images: v.array(v.object({ id: v.string(), description: v.string() })),
    tweet: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("posts", args);
  },
});
