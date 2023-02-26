import { createBot, Intents, startBot } from "discordeno";
import { timesChannel } from "./cmd/timesChannel.ts";
import { initDB } from "./db.ts";
import { TOKEN } from "./secrets.ts";

const bot = createBot({
  token: TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages,
});

const db = initDB();

await timesChannel(bot, db);

startBot(bot);
