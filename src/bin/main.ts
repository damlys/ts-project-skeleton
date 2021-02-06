#!/usr/bin/env node

import { runHttpServer } from "../http-server";

const helpMessage: string = `TypeScript project skeleton for Node.js projects.

Usage: ts-project-skeleton [command]

Commands:
run-http-server, r    Runs the HTTP server
help, h               Displays the help message
version, v            Displays the application version

Environment variables:
TPS_LOG_LEVEL         The application log level
                      Value: debug|info|notice|warning|error|critical|alert|emergency
                      Default: debug
`;

function getVersion(): string {
  try {
    const { version }: { version: string | undefined } = require("../../package.json"); // eslint-disable-line
    return version || "UNKNOWN";
  } catch {
    return "UNKNOWN";
  }
}

async function main(): Promise<void> {
  try {
    const logLevel: string = process.env.TPS_LOG_LEVEL || "debug"; // eslint-disable-line

    switch (process.argv[2]) {
      case "run-http-server":
      case "r":
        runHttpServer();
        return;
      case "version":
      case "v":
        process.stdout.write(`ts-project-skeleton v${getVersion()}\n`);
        process.exit(0);
        return;
      case "help":
      case "h":
      case "":
      case undefined:
        process.stdout.write(helpMessage);
        process.exit(0);
        return;
      default:
        process.stderr.write(
          `Command "${process.argv[2]}" does not exist. Use one of: "run-http-server", "help" or "version".\n`
        );
        process.exit(127);
        return;
    }
  } catch (error) {
    process.stderr.write(`Something went wrong!\n${error.toString()}\n`);
    process.exit(1);
  }
}

main();
