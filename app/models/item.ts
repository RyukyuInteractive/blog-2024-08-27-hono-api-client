import { union } from "valibot"
import { vItemComment } from "~/models/item-comment"
import { vItemJob } from "~/models/item-job"
import { vItemPoll } from "~/models/item-poll"
import { vItemPollopt } from "~/models/item-pollopt"
import { vItemStory } from "~/models/item-story"

export const vItem = union([
  vItemComment,
  vItemJob,
  vItemPoll,
  vItemPollopt,
  vItemStory,
])
