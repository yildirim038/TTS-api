import db from "./SequelizeSetup.js"

export async function getAll() {
  return await db.tasks.findAll();
}

export async function findById(pId) {
  return await db.tasks.findByPk(pId);
}

export async function create(pTask) {
  return await db.tasks.create(pTask);
}

export async function remove(pId) {
  return await db.tasks.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pTask) {
  return await db.tasks.update(pTask, {
    where: { id: pId }
  });
}
