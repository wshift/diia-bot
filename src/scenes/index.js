const { SCENES } = require('../constants');
const greetingScreen = require('./01_greeting');
const mainMenuScreen = require('./02_menu');
const mockScreen = require('./03_mock');

module.exports = {
  [SCENES.GREETING]: greetingScreen,
  [SCENES.MAIN_MENU]: mainMenuScreen,
  [SCENES.MOCK_SECTION]: mockScreen,
};
