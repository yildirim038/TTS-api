import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { clientOrigins, serverPort } from "./config/env.dev.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import helmet from "helmet";

// Routers
import personsRouter from './routers/PersonRoute.js';
import assistantsRouter from './routers/AssistantRoute.js';
import adminsRouter from './routers/AdminRoute.js';
import excuseRouter from './routers/ExcuseRoute.js';
import tasksRouter from './routers/TaskRoute.js';
import creatTaskListRouter from './routers/CreatTaskListRoute.js';


let app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/persons', personsRouter);
app.use('/assistants', assistantsRouter);
app.use('/admins', adminsRouter);
app.use('/excuse', excuseRouter);
app.use('/tasks', tasksRouter);
app.use('/creatTaskList', creatTaskListRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(serverPort, () =>
    console.log(`API Server listening on port ${serverPort}`)
);


// to be deleted
