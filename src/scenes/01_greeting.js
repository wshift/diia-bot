const { SCENES, STEP } = require('../constants');
const { GREETING_SCREEN } = require('../text');

const greetingScreen = {
  [STEP.ONE]: async function (message) {
    await message.reply(GREETING_SCREEN.FIRST_MSG, GREETING_SCREEN.GO_BTN);
    return {
      nextScene: SCENES.GREETING,
      nextStep: STEP.TWO,
      hasNext: false,
    };
  },
  [STEP.TWO]: async function (message) {
    // if message is similar to next step button
    if (message.text === GREETING_SCREEN.GO_BTN[0][0]) {
      message.reply(GREETING_SCREEN.GREETING_COMPLETE_TEXT);
      return {
        nextScene: SCENES.MAIN_MENU,
        nextStep: STEP.ONE,
        hasNext: true,
      };
    }
    return {
      nextScene: SCENES.GREETING,
      nextStep: STEP.ONE,
      hasNext: true,
    };
  },
};

module.exports = greetingScreen;
