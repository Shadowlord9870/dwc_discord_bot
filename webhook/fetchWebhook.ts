import axios from "npm:axios@1.2.0";

export const fetchWebhook = async (
  webhookUrl: string,
  text: string,
  username: string,
) => {
  await axios.post(
    webhookUrl,
    {
      content: text,
      username: username,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
