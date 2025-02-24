const ParkingSpot = require('../models/ParkingSpot');

class ParkingSpotRepository {
    async findAll() {
        return await ParkingSpot.findAll();
    }

    async findById(parking_spot_id) {
        return await ParkingSpot.findByPk(parking_spot_id);
    }

    async addSpot(name) {
        return await ParkingSpot.create({ name });
    }
}

module.exports = new ParkingSpotRepository();
