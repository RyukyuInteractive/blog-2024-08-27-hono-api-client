import { array, literal, number, object, optional, string } from "valibot"

export const vItemPoll = object({
  id: number(),
  type: literal("poll"),
  by: string(),
  descendants: number(),
  kids: array(number()),
  parts: array(number()),
  score: number(),
  text: optional(string()),
  time: number(),
  title: string(),
})
