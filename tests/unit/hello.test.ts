import "jest";
import { hello } from "../../src/hello";

test("should return Hello!", (): void => {
  expect(hello()).toBe("Hello!");
});
