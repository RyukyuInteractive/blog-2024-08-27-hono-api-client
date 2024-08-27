import { union } from "valibot"
import { vItemStory } from "~/models/item-ask"
import { vItemComment } from "~/models/item-comment"
import { vItemJob } from "~/models/item-job"
import { vItemPoll } from "~/models/item-poll"
import { vItemPollopt } from "~/models/item-pollopt"

export const vItem = union([
  vItemComment,
  vItemJob,
  vItemPoll,
  vItemPollopt,
  vItemStory,
])
