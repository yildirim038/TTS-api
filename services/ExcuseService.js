import * as excuseRepository from '../persistency/ExcuseRepository.js';

export async function createExcuse(pExcuse) {
    return await excuseRepository.create(pExcuse);
}

export async function deleteExcuse(pId) {
    return await excuseRepository.remove(pId);
}

export async function getAllExcuse() {
    return await excuseRepository.getAll();
}

export async function getExcuseById(pId) {
    let excuse = await excuseRepository.findById(pId)
    return excuse;
}

export async function updateExcuse(pId, pUpdateExcuse) {
    let excuse = await excuseRepository.updateExcuse(pId, pUpdateExcuse);
    return excuse;
}
