import "jest";
import fetch, { Response } from "node-fetch";
import { httpTestsEndpoint } from "./helpers";

describe("GET /hello", (): void => {
  test("should respond with Hello! message", async (): Promise<void> => {
    const response: Response = await fetch(`${httpTestsEndpoint}/hello`, {
      method: "GET",
    });
    const payload: any = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("application/json");
    expect(payload.method).toBe("GET");
    expect(payload.url).toBe("/hello");
    expect(payload.message).toBe("Hello!");
  });
});
