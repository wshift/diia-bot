const { SCENES, STEP } = require('../constants');

module.exports = class Customer {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.scene = SCENES.GREETING;
    this.step = STEP.ONE;
  }
};
