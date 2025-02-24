const { sendDailyForm } = require('../services/formService');

function startHandler(bot) {
    bot.onText(/\/start/, (msg) => {
        sendDailyForm(bot, msg.chat.id);
    });
}

module.exports = startHandler;
