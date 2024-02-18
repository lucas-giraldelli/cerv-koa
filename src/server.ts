import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'koa2-cors';
import { config } from './config/serverConfig';
import authenticate from './middlewares/authenticate';
import healthcheck from './routes/healthcheck';
import protectedRoutes from './routes/protected/_routes.root';

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(
  cors({
    origin: '*'
  })
);

/** Default logger */
app.use(logger());
/** Checks if server is running */
app.use(healthcheck.routes());
/** Auth middleware */
app.use(authenticate());
/** All protected routes */
app.use(protectedRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(
      `==============================================================================================================`
    );
    console.log(`
    ,ad8888ba,   88888888888  88888888ba   8b           d8     88      a8P   ,ad8888ba,         db
   d8"'    \`"8b  88           88      "8b  \`8b         d8'     88    ,88'   d8"'    \`"8b       d88b
  d8'            88           88      ,8P   \`8b       d8'      88  ,88"    d8'        \`8b     d8'\`8b
  88             88aaaaa      88aaaaaa8P'    \`8b     d8'       88,d88'     88          88    d8'  \`8b
  88             88"""""      88""""88'       \`8b   d8'        8888"88,    88          88   d8YaaaaY8b
  Y8,            88           88    \`8b        \`8b d8'         88P   Y8b   Y8,        ,8P  d8""""""""8b
   Y8a.    .a8P  88           88     \`8b        \`888'          88     "88,  Y8a.    .a8P  d8'        \`8b
    \`"Y8888Y"'   88888888888  88      \`8b        \`8'           88       Y8b  \`"Y8888Y"'  d8'          \`8b


  `);
    console.log(
      `===============================================================================================================`
    );
    console.log(`Server started on port: ${PORT}`);
  })
  .on('error', (err) => {
    console.error(err);
  });

export default server;
