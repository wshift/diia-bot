const scenes = require('../scenes');

const runScene = async (customer, message) => {
  try {
    const { scene, step } = customer;
    const func = scenes[scene][step];
    const { nextScene, nextStep, hasNext } = await func(message);
    customer.scene = nextScene;
    customer.step = nextStep;
    return hasNext;
  } catch (e) {
    console.error(`Error: ${e}`);
  }
};

module.exports = runScene;
