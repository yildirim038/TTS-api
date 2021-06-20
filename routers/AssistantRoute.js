import express from 'express';
const router = express.Router();
import * as assistantsService from '../services/AssistantService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.getAllAssistant())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.getAssistantById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await assistantsService.createAssistant(req.body))));
router.put('/:id', async function (req, res, next) {
    let assistantId = req.params.id;
    let assistantToBeUpdated = req.body;
    let updatedAssistant = await assistantsService.updateAssistant(assistantId, assistantToBeUpdated);
    res.status(200).send(updatedAssistant);
});
router.delete('/:id', async function (req, res, next) {
    let assistantId = req.params.id;
    await assistantsService.deleteAssistant(assistantId);
    res.status(200).send("deleted");
})


export default router;
