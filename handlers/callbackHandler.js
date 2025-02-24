const ParkingSpotRepository = require('../repositories/ParkingSpotRepository');
const SelectionRepository = require('../repositories/SelectionRepository');
const { sendDailyForm } = require('../services/formService');

async function handleButtonPress(bot, query) {
    const user_id = query.from.id;
    const parking_spot_id = parseInt(query.data.split('_')[1]);

    const parkingSpot = await ParkingSpotRepository.findById(parking_spot_id);
    if (!parkingSpot) return;

    if (parkingSpot.owner_id === user_id) {
        // Owner can toggle their own parking spot
        await SelectionRepository.toggleSelection(user_id, parking_spot_id);
    } else {
        // Other users can only select unselected parking spots
        const selection = await SelectionRepository.findByParkingSpotId(parking_spot_id);
        if (!selection || !selection.selected) {
            await SelectionRepository.toggleSelection(user_id, parking_spot_id);
        }
    }

    // Update the form
    await sendDailyForm(bot, query.message.chat.id);
}

module.exports = handleButtonPress;
