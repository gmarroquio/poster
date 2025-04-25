import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    description: v.string(),
    keywords: v.string(),
    cover: v.string(),
    text: v.string(),
    images: v.array(v.object({ id: v.string(), description: v.string() })),
    tweet: v.string(),
  }),
});
