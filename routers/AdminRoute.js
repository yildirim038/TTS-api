import express from 'express';
const router = express.Router();
import * as adminService from '../services/AdminService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.getAllAdmin())));

router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.getAdminById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.createAdmin(req.body))));

router.delete('/:id', async function (req, res, next) {
    let adminId = req.params.id;
    await adminService.deleteAdmin(adminId);
    res.status(200).send("deleted");
})

router.put('/:id', async function (req, res, next) {
    let adminId = req.params.id;
    let adminToBeUpdated = req.body;
    let updatedPerson = await adminService.updateAdmin(adminId, adminToBeUpdated);
    res.status(200).send(updatedPerson);
});
export default router;
