import * as adminRepository from '../persistency/AdminRepository.js';

export async function createAdmin(pAdmin) {
    return await adminRepository.create(pAdmin);
}

export async function deleteAdmin(pId) {
    return await adminRepository.remove(pId);
}

export async function getAllAdmin() {
    return await adminRepository.getAll();
}

export async function getAdminById(pId) {
    let admin = await adminRepository.findById(pId)
    return admin;
}

export async function updateAdmin(pId, pUpdateAdmin) {
    let admin = await adminRepository.updateAdmin(pId, pUpdateAdmin);
    return admin;
}
