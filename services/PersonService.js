import * as personRepository from '../persistency/PersonRepository.js';

export async function createPerson(pPerson) {
    return await personRepository.create(pPerson);
}

export async function deletePerson(pId) {
    return await personRepository.remove(pId);
}

export async function getAllPerson() {
    return await personRepository.getAll();
}

export async function getPersonById(pId) {
    let person = await personRepository.findById(pId)
    return person;
}

export async function updatePerson(pId, pUpdatePerson) {
    let person = await personRepository.updatePerson(pId, pUpdatePerson);
    return person;
}
