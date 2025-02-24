require('dotenv').config(); // Load environment variables from .env (для других переменных)

module.exports = {
    TOKEN: process.env.TELEGRAM_BOT_TOKEN, // Токен бота из .env
    CHAT_ID: process.env.TELEGRAM_CHAT_ID, // ID чата из .env
    ADMIN_USER_ID: process.env.ADMIN_USER_ID, // ID администратора из .env

    // Константы, определенные в конфигурации
    DB_NAME: 'data/parking.db', // Имя файла базы данных
    CRON_SCHEDULE: '*/1 * * * *' // Каждый будний день в 6:00
//    CRON_SCHEDULE: '0 0 * * *', // Расписание cronjob (каждый день в полночь
//    CRON_SCHEDULE: '0 * * * *', // Каждый час
//    CRON_SCHEDULE: '*/30 * * * *', // Каждые 30 минут
//    CRON_SCHEDULE: '*/10 * * * *', Каждые 10 минут
//    CRON_SCHEDULE: '0 9 * * 1', Каждый понедельник в 9:00
};