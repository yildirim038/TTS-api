import db from "./SequelizeSetup.js"

export async function getAll() {
    return await db.creatTaskList.findAll();
}

export async function findById(pId) {
    return await db.creatTaskList.findByPk(pId)
}

export async function create(pTaskList) {
    return await db.creatTaskList.create(pTaskList);
}

export async function remove(pId) {
    return await db.creatTaskList.destroy({
        where: { id: pId }
    })
}

export async function update(pId, pTaskList) {
    return await db.creatTaskList.update(pTaskList, {
        where: { id: pId }
    });
}
