const { SCENES, STEP } = require('../constants');
const isButtonPressed = require('../utils/getKeyboardValues');
const { MOCK_SCREEN } = require('../text');

const mainMenuScreen = {
  [STEP.ONE]: async function (message) {
    const { isButton } = isButtonPressed(MOCK_SCREEN.KEYBOARD, message.text);
    if (isButton) {
      // only have 1 option for now, so we instantly go back into main menu
      return {
        nextScene: SCENES.MAIN_MENU,
        nextStep: STEP.ONE,
        hasNext: true,
      };
    }
    await message.reply(`${MOCK_SCREEN.TEXT} ${message.text}`, MOCK_SCREEN.KEYBOARD);
    return {
      nextScene: SCENES.MOCK_SECTION,
      nextStep: STEP.ONE,
      hasNext: false,
    };
  },
};

module.exports = mainMenuScreen;
