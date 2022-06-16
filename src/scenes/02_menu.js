const { SCENES, STEP } = require('../constants');
const isButtonPressed = require('../utils/getKeyboardValues');
const { MENU_SCREEN } = require('../text');

const mainMenuScreen = {
  [STEP.ONE]: async function (message) {
    const { value, isButton } = isButtonPressed(MENU_SCREEN.KEYBOARD, message.text);
    if (isButton) {
      // can be replaced to case/switch or if's like a value === 'button1 text'
      if (value) {
        return {
          nextScene: SCENES.MOCK_SECTION,
          nextStep: STEP.ONE,
          hasNext: true,
        };
      }
    }
    await message.reply(MENU_SCREEN.TEXT, MENU_SCREEN.KEYBOARD);
    return {
      nextScene: SCENES.MAIN_MENU,
      nextStep: STEP.ONE,
      hasNext: false,
    };
  },
};

module.exports = mainMenuScreen;
