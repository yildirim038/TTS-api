export default (sequelize, Sequelize) => {
    const CreatTaskList = sequelize.define("CreatTaskList", {
        date: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.INTEGER
        }
    });
    return CreatTaskList;
};