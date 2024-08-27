import { literal, number, object, optional, string } from "valibot"

export const vItemPollopt = object({
  id: number(),
  type: literal("pollopt"),
  by: string(),
  poll: number(),
  score: number(),
  text: optional(string()),
  time: number(),
})
