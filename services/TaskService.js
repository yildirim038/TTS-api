import * as tasksRepository from '../persistency/TaskRepository.js';

export async function createTasks(pTasks) {
    return await tasksRepository.create(pTasks);
}

export async function deleteTasks(pId) {
    return await tasksRepository.remove(pId);
}

export async function getAllTasks() {
    return await tasksRepository.getAll();
}

export async function getTasksById(pId) {
    let tasks = await tasksRepository.findById(pId)
    return tasks;
}

export async function updateTasks(pId, pUpdateTasks) {
    let tasks = await tasksRepository.update(pId, pUpdateTasks);
    return tasks;
}
