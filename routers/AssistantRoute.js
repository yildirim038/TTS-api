import express from 'express';
const router = express.Router();
import * as assistantsService from '../services/AssistantService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.getAllAssistant())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.getAssistantById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.createAssistant(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.deleteAssistant(req.params.id))));

export default router;
