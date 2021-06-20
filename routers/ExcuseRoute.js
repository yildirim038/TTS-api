import express from 'express';
const router = express.Router();
import * as excusesService from '../services/ExcuseService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.getAllExcuse())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.getExcuseById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await excusesService.createExcuse(req.body))));
router.delete('/:id', async function (req, res, next) {
    let excusesId = req.params.id;
    await excusesService.deleteExcuses(excusesId);
    res.status(200).send("deleted");
})
router.put('/:id', async function (req, res, next) {
    let excuseId = req.params.id;
    let excuseToBeUpdated = req.body;
    let updatedPerson = await excusesService.updateExcuse(excuseId, excuseToBeUpdated);
    res.status(200).send(updatedPerson);
});
export default router;
