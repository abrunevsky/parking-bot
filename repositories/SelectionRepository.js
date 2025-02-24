const Selection = require('../models/Selection');

class SelectionRepository {
    async toggleSelection(user_id, parking_spot_id) {
        const selection = await Selection.findOne({
            where: { user_id, parking_spot_id },
        });

        if (selection) {
            selection.selected = !selection.selected;
            await selection.save();
        } else {
            await Selection.create({ user_id, parking_spot_id, selected: true });
        }
    }

    async findByParkingSpotId(parking_spot_id) {
        return await Selection.findOne({
            where: { parking_spot_id },
        });
    }
}

module.exports = new SelectionRepository();
