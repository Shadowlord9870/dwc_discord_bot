import { WEBHOOK_URL } from "../../secrets.ts";
import { fetchWebhook } from "../fetchWebhook.ts";

export const suffixes = ["", "//", "！！"];
export const createMessage = (): string => {
  let suffix: string = suffixes[Math.round(Math.random() * suffixes.length)];
  if (suffix === "！！" && Math.random() > 0.8) {
    suffix += "\nね！！！！！";
  }
  return `しんみりしてきましたね${suffix}`;
};

if (import.meta.main) {
  await fetchWebhook(WEBHOOK_URL, createMessage(), "しんみりBot");
}
