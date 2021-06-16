import db from "./SequelizeSetup.js"

export async function getAll() {
  return await db.excuse_lists.findAll();
}

export async function findById(pId) {
  return await db.excuse_lists.findByPk(pId);
}

export async function create(pExcuse) {
  return await db.excuse_lists.create(pExcuse);
}

export async function remove(pId) {
  return await db.excuse_lists.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedExcuse) {
  return await db.excuse_lists.update(pUpdatedExcuse, {
    where: { id: pId }
  });
}