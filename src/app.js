require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./router');
const launchBot = require('./services/telegram');

const { BOT_TOKEN, PORT = 3000 } = process.env;

(async () => {
  try {
    app.listen(PORT, async () => {
      const bot = await launchBot(BOT_TOKEN);
      router(bot);
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.error(`[error on project init] => ${e}`);
  }
})();
