const ParkingSpotRepository = require('../repositories/ParkingSpotRepository');

async function sendDailyForm(bot, chatId) {
    const parkingSpots = await ParkingSpotRepository.findAll();

    const keyboard = parkingSpots.map(spot => {
        return [{ text: spot.name, callback_data: `toggle_${spot.parking_spot_id}` }];
    });

    const replyMarkup = {
        inline_keyboard: keyboard,
    };

    bot.sendMessage(chatId, 'Please choose a parking spot:', { reply_markup: replyMarkup });
}

module.exports = { sendDailyForm };
