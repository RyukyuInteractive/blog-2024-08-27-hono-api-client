import { literal, number, object, optional, string } from "valibot"

export const vItemJob = object({
  id: number(),
  type: literal("job"),
  by: string(),
  score: number(),
  text: optional(string()),
  time: number(),
  title: string(),
  url: string(),
})
