export default (sequelize, Sequelize) => {
  const Excuse = sequelize.define("excuse", {
    excuse_reason: {
      type: Sequelize.STRING
    },
    start_time: {
      type: Sequelize.DATE
    },
    finish_time: {
      type: Sequelize.DATE
    }
  });

  return Excuse;
};