import express from "express";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import{ debug } from "debug";

// importar aqui os arquivos de rotas

const app: express.Application = express();
const server: http.Server = http.createServer();
const PORT = 3000;
// const routes: CommonRoutesConfig[]  = []; trazer o arquivo antes
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
}
if(!process.env.DEBUG) {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

// routes.push(new ClientsRoutes(app));
// routes.push(new AccountsRoutes(app));

const runningMessage = `Servidor rodando na porta ${PORT}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

// server.listen(PORT, () => {
//     routes.forEach((route: CommonRoutesConfig) => {
//         debugLog(`Rotas configuradas para ${route.getName()}`);
//     });
//     console.log(runningMessage);
// });

export default app;