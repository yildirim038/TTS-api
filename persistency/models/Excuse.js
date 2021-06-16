export default (sequelize, Sequelize) => {
    const Excuse = sequelize.define("proje-excuse-list", {
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