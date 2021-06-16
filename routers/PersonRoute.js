import express from 'express';
const router = express.Router();
import * as personsService from '../services/PersonService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.getAllPerson())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.getPersonById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.createPerson(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.deletePerson(req.params.id))));

export default router;
