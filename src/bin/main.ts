#!/usr/bin/env node

import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { hello } from "../index";

function runHttpServer(): void {
  const host: string = "0.0.0.0";
  const port: number = 8080;
  const httpServer: Server = createServer();

  httpServer.on("listening", (): void => {
    process.stdout.write(`HTTP server listening on "http://${host}:${port}".\n`);
  });

  httpServer.on("request", (req: IncomingMessage, res: ServerResponse): void => {
    process.stdout.write(`HTTP server processing "${req.method} ${req.url}".\n`);

    const payload: any = {
      method: req.method,
      url: req.url,
      message: hello(),
    };
    const body: string = JSON.stringify(payload);
    res.writeHead(200, {
      "Content-Length": Buffer.byteLength(body),
      "Content-Type": "application/json",
    });
    res.end(body);
  });

  httpServer.listen(port, host);
}

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
