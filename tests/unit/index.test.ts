import "jest";
import { hello } from "../../src";

test("should say hello", (): void => {
  expect(hello()).toBe("Hello!");
});
