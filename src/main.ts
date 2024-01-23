import { Server, ServerCredentials } from "@grpc/grpc-js";
import { ExampleService, UnimplementedExampleServiceService } from "./services/example";
import { MockService, mock } from "./services/mock";
import express from "express";
import path from "path";

export default class Main {
  static async run(): Promise<void> {
    const server = new Server();
    server.addService(UnimplementedExampleServiceService.definition, new ExampleService());
    server.addService(mock.UnimplementedMockServiceService.definition, new MockService('develop'));

    // Démarrez le serveur gRPC sur le port 50051
    const grpcPort = 50051;
    const grpcHost = '0.0.0.0';
    server.bindAsync(`${grpcHost}:${grpcPort}`, ServerCredentials.createInsecure(), (err, bindPort) => {
      if (err) {
        console.error(`Erreur lors de la liaison du serveur : ${err}`);
      } else {
        console.log(`Serveur gRPC démarré sur ${grpcHost}:${bindPort}`);
        server.start();
      }
    });

    // Expose les definitions de service
    const app = express();
    const httpPort = 50052;
    const basePath = path.join(__dirname, '../proto');
    app.get('/proto/:file', (req, res) => {
      const fileName = req.params.file;
      console.log('fileName ', fileName);
      const filePath = path.join(basePath, `${fileName}.proto`);
      res.sendFile(filePath);
    });
    app.listen(httpPort);
  }
}
