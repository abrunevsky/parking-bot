const { Sequelize } = require('sequelize');
const { DB_NAME } = require('./config/config');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: DB_NAME,
    logging: false,
});

module.exports = sequelize;