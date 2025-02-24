const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    is_owner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = User;
