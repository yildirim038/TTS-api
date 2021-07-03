export default (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    place_name: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    explanation: {
      type: Sequelize.STRING
    }
  });
  return Task;
};