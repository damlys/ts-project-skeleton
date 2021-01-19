import "jest";
import * as index from "../../src";

test("should export public API parts", (): void => {
  expect(index).toHaveProperty("hello");
  expect(index).toHaveProperty("runHttpServer");
});
