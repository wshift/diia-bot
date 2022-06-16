const isButtonPressed = (array, input) => {
  const flatArray = array.flat();
  const value = flatArray.find((button) => button === input);
  const isButton = !!value;

  return {
    value,
    isButton,
  };
};
module.exports = isButtonPressed;
