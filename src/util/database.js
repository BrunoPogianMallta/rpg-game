const Sequelize = require('sequelize');


const sequelize = new Sequelize('game-db','root','root',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;