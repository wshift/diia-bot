const { SCENES, STEP } = require('../constants');
const runScene = require('./scene');

const processMessageByType = async (message, customer) => {
  if (message.text.includes('/start')) {
    customer.scene = SCENES.GREETING;
    customer.step = STEP.ONE;
  }
  let hasNext = await runScene(customer, message); //false
  while (hasNext) {
    hasNext = await runScene(customer, message);
  }
};

module.exports = processMessageByType;
