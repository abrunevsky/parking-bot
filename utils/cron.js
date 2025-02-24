const cron = require('node-cron');
const { sendDailyForm } = require('../services/formService');
const { CHAT_ID, CRON_SCHEDULE } = require('../config/config');

function setupCron(bot) {
    if (!CRON_SCHEDULE) {
        console.error('Cron schedule is not defined in the configuration.');
        return;
    }

    cron.schedule(CRON_SCHEDULE, () => {
        sendDailyForm(bot, CHAT_ID);
    });

    console.log(`Cron job scheduled with pattern: ${CRON_SCHEDULE}`);
}

module.exports = setupCron;
