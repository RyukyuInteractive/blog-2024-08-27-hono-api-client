import { vValidator } from "@hono/valibot-validator"
import { Hono } from "hono"
import { hc } from "hono/client"
import { literal, object, optional, parse } from "valibot"
import { vItem } from "~/models/item"

const hono = new Hono()

const app = hono.get(
  "/v0/item/:item",
  vValidator("query", object({ print: optional(literal("pretty")) })),
  async (c) => {
    console.log(c.req.url)
    const resp = await fetch(c.req.url, {
      headers: { "Content-Type": "application/json" },
    })
    const json = await resp.json()
    const result = parse(vItem, json)
    return c.json(result)
  },
)

const client = hc<typeof app>("https://hacker-news.firebaseio.com", {
  fetch(input: string | URL | Request, init?: RequestInit) {
    return app.request(input, init)
  },
})

const resp = await client.v0.item[":item"].$get({
  param: { item: "8863.json" },
  query: { print: "pretty" },
})

const json = await resp.json()

if (json.type === "story") {
  console.log(json)
}
