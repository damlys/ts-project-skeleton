if (typeof process.env.TESTS_ENDPOINT !== "string" || process.env.TESTS_ENDPOINT === "") {
  throw new Error("Tests endpoint is not defined.");
}
export const testsEndpoint: string = process.env.TESTS_ENDPOINT;
