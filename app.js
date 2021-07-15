import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import checkJwt from './auth/check-jwt.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';


// Routers
import personsRouter from './routers/PersonRoute.js';
import assistantsRouter from './routers/AssistantRoute.js';
import adminsRouter from './routers/AdminRoute.js';
import excuseRouter from './routers/ExcuseRoute.js';
import tasksRouter from './routers/TaskRoute.js';
import creatTaskListRouter from './routers/CreatTaskListRoute.js';


let app = express();

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
app.use(jwtCheck);

app.listen(3000, () => {
    console.log("listening on 3000");
});


// to be deleted
