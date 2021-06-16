export default (sequelize, Sequelize) => {
    const Person = sequelize.define("proje-person", {
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
      },
      arrival_date: {
        type: Sequelize.DATE
      },
      amount_of_work: {
        type: Sequelize.INTEGER
      }
    });
  
    return Person;
  };