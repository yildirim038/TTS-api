import db from "./SequelizeSetup.js"

export async function getAll() {
  return await db.assistants.findAll();
}

export async function findById(pId) {
  return await db.assistants.findByPk(pId);
}

export async function create(pAssistant) {
  return await db.assistants.create(pAssistant);
}

export async function remove(pId) {
  return await db.assistants.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pAssistant) {
  return await db.assistants.update(pAssistant, {
    where: { id: pId }
  });
}
