const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Account = sequelize.define('account',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Account;