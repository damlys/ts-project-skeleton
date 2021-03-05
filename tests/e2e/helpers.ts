if (typeof process.env.HTTP_TESTS_ENDPOINT !== "string" || process.env.HTTP_TESTS_ENDPOINT === "") {
  throw new Error("HTTP tests endpoint is not defined.");
}
export const httpTestsEndpoint: string = process.env.HTTP_TESTS_ENDPOINT;
