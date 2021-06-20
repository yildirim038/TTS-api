import express from 'express';
const router = express.Router();
import * as personsService from '../services/PersonService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.getAllPerson())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.getPersonById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await personsService.createPerson(req.body))));
router.delete('/:id', async function (req, res, next) {
    let personId = req.params.id;
    await personsService.deletePerson(personId);
    res.status(200).send("deleted");
})
router.put('/:id', async function (req, res, next) {
    let personId = req.params.id;
    let personToBeUpdated = req.body;
    let updatedPerson = await personsService.updatePerson(personId, personToBeUpdated);
    res.status(200).send(updatedPerson);
});
export default router;
