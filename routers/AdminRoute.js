import express from 'express';
const router = express.Router();
import * as adminService from '../services/AdminService.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.getAllAdmin())));

router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.getAdminById(req.params.id))));

router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.createAdmin(req.body))));

router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await adminService.deleteAdmin(req.params.id))));

export default router;
