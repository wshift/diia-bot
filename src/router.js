const { getCustomer, processMessageByType } = require('./services');
const Message = require('./entity/message');

const router = (bot) => {
  // PROCESS REGULAR MESSAGE
  bot.on('message', async (ctx) => {
    const chatId = ctx.message.from.id;
    const { first_name: firstName, last_name: lastName } = ctx.message.from;

    const message = new Message(ctx);
    const customer = getCustomer({ chatId, firstName, lastName });

    await processMessageByType(message, customer);
  });
};

module.exports = router;
