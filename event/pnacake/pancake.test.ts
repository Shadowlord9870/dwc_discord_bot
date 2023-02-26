import { assert, assertFalse } from "asserts";
import { checkMessage } from "./pancake.ts";

const trueMessages = [
  "パンケーキ",
  "AぱんけーきB",
  "ぱ",
  "ぱんけ〜き",
  "ぱんけ〜〜き",
  "パンけーき",
  "hotcake",
  "ぱんけき",
  "けき"
];
trueMessages.forEach((trueMessage) => {
  Deno.test(`checkMessage("${trueMessage}")がtrueを返すこと`, () => {
    assert(checkMessage(trueMessage));
  });
});

const falseMessages = ["AA", "パ", "ぱあ", "パンダ", "ケーキ"];
falseMessages.forEach((falseMessage) => {
  Deno.test(`checkMessage("${falseMessage}")がfalseを返すこと`, () => {
    assertFalse(checkMessage(falseMessage));
  });
});
