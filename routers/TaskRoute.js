import express from 'express';
const router = express.Router();
import * as tasksService from '../services/TaskService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.getAllTasks())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.getTasksById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.createTasks(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await tasksService.deleteTasks(req.params.id))));

export default router;
