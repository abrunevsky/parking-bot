const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const ParkingSpot = sequelize.define('ParkingSpot', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('personal', 'common'),
        defaultValue: 'common',
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

module.exports = ParkingSpot;
