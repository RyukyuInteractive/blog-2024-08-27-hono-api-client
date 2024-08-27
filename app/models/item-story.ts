import { array, literal, number, object, optional, string } from "valibot"

export const vItemStory = object({
  id: number(),
  type: literal("story"),
  by: string(),
  descendants: number(),
  kids: array(number()),
  score: number(),
  text: optional(string()),
  time: number(),
  title: string(),
})
