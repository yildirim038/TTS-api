export default (sequelize, Sequelize) => {
    const Assistants = sequelize.define("proje-asistan", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Assistants;
  };