#!/usr/bin/env node

import { runHttpServer } from "../http-server";

async function main(): Promise<void> {
  switch (process.argv[2]) {
    case "run-http-server":
      runHttpServer();
      return;
    default:
      process.stderr.write("Application command not defined.\n");
      process.exit(127);
      return;
  }
}

main();
