const { Telegraf } = require('telegraf');

const launchBot = async (token) => {
  if (!token) {
    throw new Error('BOT_TOKEN must be provided!');
  }

  const bot = new Telegraf(token);
  bot.launch();
  return bot;
};

module.exports = launchBot;
