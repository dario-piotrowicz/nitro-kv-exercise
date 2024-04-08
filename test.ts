import { expect, test } from "vitest";

test("the dev server should be running", async () => {
  const text = await (await fetch("http://localhost:3000")).text();
  expect(text).toBe("Not implemented use `/kv/<KEY>` instead");
});

test("/kv/CFLARE should return the pre-populated value", async () => {
  const json = await (await fetch("http://localhost:3000/kv/CFLARE")).json();
  expect(json).toEqual({
    success: true,
    value: "this is the value of CFLARE!",
  });
});

test("should allow putting and getting a value for a specific entry", async () => {
  const key = "a_radom_key";
  const putJson = await (
    await fetch(`http://localhost:3000/kv/${key}`, {
      method: "PUT",
      headers: [["content-type", "text/plain"]],
      body: "a random value",
    })
  ).json();
  expect(putJson).toEqual({
    success: true,
  });
  const getJson = await (await fetch(`http://localhost:3000/kv/${key}`)).json();
  expect(getJson).toEqual({
    success: true,
    value: "a random value",
  });
});
