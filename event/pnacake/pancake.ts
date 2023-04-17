import { Bot, Message } from "discordeno";

export const checkMessage = (messageContent: string): boolean => {
  const pattern =
    /^(ぱ|(けき))$|(ぱん|パン)[けケ][ー\-〜\~]*[きキ]|(pan|hot)cake/i;
  return pattern.test(messageContent);
};

const pancakeUrls = [
  "https://imgur.com/eoeCqai",
  "https://imgur.com/SD0Lcs3",
  "https://imgur.com/VH9zxjl",
  "https://imgur.com/RdYjOS1",
];

export const pancake = (b: Bot, message: Message) => {
  if (message.isFromBot) return;
  if (checkMessage(message.content)) {
    b.helpers.sendMessage(message.channelId, {
      content: pancakeUrls[Math.floor(Math.random() * pancakeUrls.length)],
    });
  }
};
