const { isAdmin } = require('../utils/admin');
const ParkingSpotRepository = require('../repositories/ParkingSpotRepository');

function adminHandler(bot) {
    // Command to add a new parking spot
    bot.onText(/\/addspot (.+)/, async (msg, match) => {
        const user_id = msg.from.id;
        if (!isAdmin(user_id)) {
            bot.sendMessage(msg.chat.id, 'You are not authorized to use this command.');
            return;
        }

        const spotName = match[1]; // Get the spot name from the command
        await ParkingSpotRepository.addSpot(spotName);
        bot.sendMessage(msg.chat.id, `Parking spot "${spotName}" added successfully.`);
    });

    // Command to list all parking spots
    bot.onText(/\/listspots/, async (msg) => {
        const user_id = msg.from.id;
        if (!isAdmin(user_id)) {
            bot.sendMessage(msg.chat.id, 'You are not authorized to use this command.');
            return;
        }

        const spots = await ParkingSpotRepository.findAll();
        const spotList = spots.map(spot => spot.name).join('\n');
        bot.sendMessage(msg.chat.id, `Parking spots:\n${spotList}`);
    });
}

module.exports = adminHandler;
