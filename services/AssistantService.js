import * as assistantRepository from '../persistency/AssistantRepository.js';

export async function createAssistant(pAssistant) {
    return await assistantRepository.create(pAssistant);
}

export async function deleteAssistant(pId) {
    return await assistantRepository.remove(pId);
}

export async function getAllAssistant() {
    return await assistantRepository.getAll();
}

export async function getAssistantById(pId) {
    let assistant = await assistantRepository.findById(pId)
    return assistant;
}

export async function updateAssistant(pId, pUpdateAssistant) {
    let assistant = await assistantRepository.updateAssistant(pId, pUpdateAssistant);
    return assistant;
}
