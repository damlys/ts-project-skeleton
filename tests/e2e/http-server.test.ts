import "jest";
import fetch, { Response } from "node-fetch";
import { testsEndpoint } from "./helpers";

test("should respond", async (): Promise<void> => {
  const response: Response = await fetch(`${testsEndpoint}/foo/bar/baz`, {
    method: "GET",
  });
  const payload: any = await response.json();

  expect(response.status).toBe(200);
  expect(payload.method).toEqual("GET");
  expect(payload.url).toEqual("/foo/bar/baz");
  expect(payload.message).toEqual("Hello!");
});
