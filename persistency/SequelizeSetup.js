import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";
import PersonModel from "./models/Person.js";
import AsistantModel from "./models/Assistant.js"
import ExcuseListModel from "./models/Excuse.js"
import TasksModel from "./models/Task.js"
import AdminModel from "./models/Admin.js"
import CreatTaskListModel from "./models/CreatTaskList.js"

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.persons = PersonModel(sequelize, Sequelize);
db.assistants = AsistantModel(sequelize, Sequelize);
db.excuse = ExcuseListModel(sequelize, Sequelize);
db.tasks = TasksModel(sequelize, Sequelize);
db.admin = AdminModel(sequelize, Sequelize);
db.creatTaskList = CreatTaskListModel(sequelize, Sequelize);

// create relationship
db.assistants.hasMany(db.creatTaskList);
db.tasks.hasMany(db.creatTaskList);
db.persons.hasMany(db.creatTaskList);

// .sync({ force: true })
db.sequelize.sync().then(() => {
  console.log("Basari ile olusturuldu...");
});

export default db;


