const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = require('./config/config');
const sequelize = require('./db');
const startHandler = require('./handlers/startHandler');
const callbackHandler = require('./handlers/callbackHandler');
const adminHandler = require('./handlers/adminHandler'); // Добавлено
const setupCron = require('./utils/cron');

// Initialize the database
sequelize.sync().then(() => {
    console.log('Database synchronized.');
});

// Create the bot
const bot = new TelegramBot(TOKEN, { polling: true });

// Handlers
startHandler(bot);
bot.on('callback_query', (query) => callbackHandler(bot, query));
adminHandler(bot); // Добавлено



// Scheduler
setupCron(bot);

console.log('Bot is running...');
