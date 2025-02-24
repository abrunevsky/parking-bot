const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Selection = sequelize.define('Selection', {
    selected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Selection;
