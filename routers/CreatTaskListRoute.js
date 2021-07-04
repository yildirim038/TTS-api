import express from 'express';
const router = express.Router();
import * as creatTaskListService from '../services/CreatTaskListService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await creatTaskListService.getAllCreatTaskList())));

router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await creatTaskListService.getCreatTaskListById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await creatTaskListService.createCreatTaskList(req.body))));

router.delete('/:id', async function (req, res, next) {
    let creatTaskListId = req.params.id;
    await creatTaskListService.deleteCreatTaskList(creatTaskListId);
    res.status(200).send("deleted");
})

router.put('/:id', async function (req, res, next) {
    let creatTaskListId = req.params.id;
    let creatTaskListToBeUpdated = req.body;
    let updatedCreatTaskList = await creatTaskListService.updateCreatTaskList(creatTaskListId, creatTaskListToBeUpdated);
    res.status(200).send(updatedCreatTaskList);
});
export default router;
