import type { Hono } from "hono"
import { hc } from "hono/client"
import type { BlankEnv } from "hono/types"
import type { StatusCode } from "hono/utils/http-status"

type AppType = Hono<
  BlankEnv,
  {
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
  }
>

const client = hc<AppType>("https://hacker-news.firebaseio.com")

const resp = await client.v0.item[":item"].$get({
  param: { item: "8863.json" },
  query: { print: "pretty" },
})

const json = await resp.json()

if (json.type === "story") {
  console.log(json)
}
