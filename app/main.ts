import { Hono } from "hono"
import { hc } from "hono/client"
import type { BlankEnv, Schema } from "hono/types"
import type { StatusCode } from "hono/utils/http-status"

type CustomSchema<T extends Schema> = T

type AppSchema = CustomSchema<{
  "/v0/item/:item": {
    $get: {
      input: {
        param: {
          item: string
        }
        query: {
          print?: "pretty"
        }
      }
      output: {
        type: "story" | "comment" | "job" | "poll" | "pollopt"
      }
      outputFormat: "json"
      status: StatusCode
    }
  }
}>

const hono = new Hono<BlankEnv, AppSchema>()

const client = hc<typeof hono>("https://hacker-news.firebaseio.com")

const resp = await client.v0.item[":item"].$get({
  param: { item: "8863.json" },
  query: { print: "pretty" },
})

const json = await resp.json()

if (json.type === "story") {
  console.log(json)
}
