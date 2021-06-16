import db from "./SequelizeSetup.js"

export async function getAll() {
  return await db.admin.findAll();
}

export async function findById(pId) {
  return await db.admin.findByPk(pId);
}

export async function create(pAdmin) {
  return await db.admin.create(pAdmin);
}

export async function remove(pId) {
  return await db.admin.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pAdmin) {
  return await db.admin.update(pAdmin, {
    where: { id: pId }
  });
}
