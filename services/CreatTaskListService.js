import * as creatTaskListRepository from '../persistency/CreatTaskListRepository.js';

export async function createCreatTaskList(pCreatTaskList) {
    return await creatTaskListRepository.create(pCreatTaskList);
}

export async function deleteCreatTaskList(pId) {
    return await creatTaskListRepository.remove(pId);
}

export async function getAllCreatTaskList() {
    return await creatTaskListRepository.getAll();
}

export async function getCreatTaskListById(pId) {
    let creatTaskList = await creatTaskListRepository.findById(pId)
    return creatTaskList;
}


export async function getCreatTaskListFindTask(pId) {
    let creatTaskList = await creatTaskListRepository.findById(pId)
    return creatTaskList;
}

export async function updateCreatTaskList(pId, pUpdateCreatTaskList) {
    let creatTaskList = await creatTaskListRepository.update(pId, pUpdateCreatTaskList);
    return creatTaskList;
}
