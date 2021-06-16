import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";
import PersonModel from "./models/Person.js";
import AsistantModel from "./models/Assistant.js"
import ExcuseListModel from "./models/Excuse.js"
import TasksModel from "./models/Task.js"
import AdminModel from "./models/Admin.js"

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

// create relationship
db.persons.hasMany(db.excuse);
db.persons.hasMany(db.tasks);

// .sync({ force: true })
db.sequelize.sync({ force: true }).then(() => {
  console.log("Basari ile olusturuldu...");
});

export default db;


