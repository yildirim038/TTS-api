import express from 'express';
const router = express.Router();
import * as excusesService from '../services/ExcuseService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.getAllExcuse())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.getExcuseById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.createExcuse(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.deleteExcuse(req.params.id))));

export default router;
