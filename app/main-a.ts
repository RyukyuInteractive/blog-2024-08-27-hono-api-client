import { vValidator } from "@hono/valibot-validator"
import { Hono } from "hono"
import { hc } from "hono/client"
import { type InferOutput, literal, object, optional } from "valibot"
import type { vItem } from "~/models/item"

const hono = new Hono()

const app = hono.get(
  "/v0/item/:item",
  vValidator("query", object({ print: optional(literal("pretty")) })),
  async (c) => {
    return c.json({} as InferOutput<typeof vItem>)
  },
)

const client = hc<typeof app>("https://hacker-news.firebaseio.com")

const resp = await client.v0.item[":item"].$get({
  param: { item: "8863.json" },
  query: { print: "pretty" },
})

const json = await resp.json()

if (json.type === "story") {
  console.log(json)
}
