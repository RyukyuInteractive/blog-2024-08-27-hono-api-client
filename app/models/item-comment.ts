import { url, array, literal, number, object, pipe, string } from "valibot"

export const vItemComment = object({
  id: number(),
  type: literal("comment"),
  by: string(),
  descendants: number(),
  kids: array(number()),
  score: number(),
  time: number(),
  title: string(),
  url: pipe(string(), url()),
})
