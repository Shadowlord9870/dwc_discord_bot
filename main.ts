import { createBot, Intents, startBot } from "discordeno";
import { timesChannel } from "./cmd/timesChannel.ts";
import { initDB } from "./db.ts";
import { pancake } from "./event/pnacake/pancake.ts";
import { TOKEN } from "./secrets.ts";

const bot = createBot({
  token: TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
});

const db = initDB();

await timesChannel(bot, db);

// メッセージ作成時のイベント
bot.events.messageCreate = (b, message) => {
  pancake(b, message)
}

startBot(bot);
