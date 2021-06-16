import db from "./SequelizeSetup.js"

export async function getAll() {
  return await db.persons.findAll();
}

export async function findById(pId) {
  return await db.persons.findByPk(pId);
}

export async function create(pPerson) {
  return await db.persons.create(pPerson);
}

export async function remove(pId) {
  return await db.persons.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedPerson) {
  return await db.persons.update(pUpdatedPerson, {
    where: { id: pId }
  });
}
