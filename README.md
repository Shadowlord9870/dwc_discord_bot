# DWC Discord Bot

DMM WEBCAMPメンターコミュニティで動作しているBotです。

## 開発を手伝ってくれる方へ

管理者の使用PCの関係上、Docker化はできないので各自で動作環境を用意してください。Denoのv1.30以降が必要です。動作確認には`secrets.ts`を用意して、次のように必要な変数を設定してください。

```ts
export const TOKEN = "your-token";
export const GUILD_ID = "your-guild-id";
export const WEBHOOK_URL = "your-webhook-url";
```

また、新規コードはテストを書いて、全てのテストを通過することを確認してからPRをお願いします。
