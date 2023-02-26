import {
  ApplicationCommandOptionTypes,
  Bot,
  ChannelTypes,
  CreateSlashApplicationCommand,
  InteractionResponseTypes,
} from "discordeno";
import { DB } from "sqlite";
import { GUILD_ID } from "../secrets.ts";

export const timesChannel = async (bot: Bot, db: DB) => {
  const createTimesChannelCommand: CreateSlashApplicationCommand = {
    name: "create_times",
    description: "timesチャンネルを作成する",
    options: [{
      name: "name",
      description: "チャンネル名（'times_'の後につける部分）",
      type: ApplicationCommandOptionTypes.String,
    }],
  };

  await bot.helpers.upsertGuildApplicationCommands(GUILD_ID, [
    createTimesChannelCommand,
  ]);

  bot.events.interactionCreate = async (b, interaction) => {
    switch (interaction.data?.name) {
      case "create_times": {
        const name = interaction.data!.options!.find((o) => o.name === "name")!
          .value as string;
        const member_id = interaction.member?.id!;
        const channel_ids = db.query<string[]>(
          "select channel_id from channels where member_id = :member_id",
          { member_id },
        );

        // 更新
        if (channel_ids.length) {
          b.helpers.editChannel(channel_ids[0][0], { name: `times_${name}` });
          b.helpers.sendInteractionResponse(interaction.id, interaction.token, {
            type: InteractionResponseTypes.ChannelMessageWithSource,
            data: {
              content: `チャンネル名を更新しました: times_${name}`,
            },
          });
          break;
        }

        // 新規作成
        const channelCreate = b.helpers.createChannel(
          interaction.guildId!,
          {
            name: `times_${name}`,
            type: ChannelTypes.GuildText,
          },
        );
        b.helpers.sendInteractionResponse(interaction.id, interaction.token, {
          type: InteractionResponseTypes.ChannelMessageWithSource,
          data: {
            content: `チャンネルを作成しました: times_${name}`,
          },
        });
        const channel = await channelCreate;
        db.query(
          "insert into channels (uuid, member_id, channel_id) values (?, ?, ?)",
          [
            crypto.randomUUID(),
            member_id,
            channel.id,
          ],
        );
      }
    }
  };
};
