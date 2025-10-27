// bot/bot.js
const TelegramBot = require('node-telegram-bot-api');

// Токен будет браться из переменной среды
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Когда пользователь пишет /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.from.first_name;

  bot.sendMessage(chatId, `Привет, ${firstName}! ❤️\n\nЯ — бот для знакомств SoulMate.\n\nНажми кнопку ниже, чтобы открыть приложение и заполнить анкету.`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📱 Открыть приложение", web_app: { url: "https://soulmate-app.up.railway.app/frontend" } }]
      ]
    }
  });
});

// Проверка: работает ли бот
bot.on('message', (msg) => {
  if (msg.text === '/ping') {
    bot.sendMessage(msg.chat.id, '🟢 Бот работает!');
  }
});

console.log('Бот запущен...');
