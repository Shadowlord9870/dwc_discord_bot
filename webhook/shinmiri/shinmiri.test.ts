import { assert } from "asserts";
import { createMessage, suffixes } from "./shinmiri.ts";

suffixes.map((suffix) => {
  Deno.test(`"しんみりしてきましたね${suffix}"を1000回以内に返すこと`, () => {
    const res = [...Array(1000)].map(() =>
      createMessage() === `しんみりしてきましたね${suffix}`
    ).some((v) => v);
    assert(res);
  });
});
Deno.test(`"ね！！！！！"を1000回以内に返すこと`, () => {
  const res = [...Array(1000)].map(() =>
    createMessage() === "しんみりしてきましたね！！\nね！！！！！"
  ).some((v) => v);
  assert(res);
});
