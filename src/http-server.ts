import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { hello } from "./hello";

export function runHttpServer(port: number = 8080, host: string = "0.0.0.0"): void {
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
