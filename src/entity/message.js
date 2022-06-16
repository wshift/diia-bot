const Markup = require('telegraf/markup');

module.exports = class Message {
  constructor(ctx) {
    this.text = ctx.message.text;
    this.ctx = ctx;
  }

  async reply(text, buttonsArray) {
    const keyboard = buttonsArray ? Markup.keyboard(buttonsArray).oneTime().resize().extra() : null;
    await this.ctx.reply(text, keyboard);
  }
};
