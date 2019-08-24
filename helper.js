const getCurrentButtonValue = value => value;

const getValueToDisplay = (value, valueToDisplay) => {
  const functionalButtons = ["AC", "C"];
  return functionalButtons.includes(value) ? valueToDisplay : value;
};

const updateCalculatorView = (value, state) => {
  getCurrentButtonValue(value);
  state.valueToDisplay = getValueToDisplay(value, state.valueToDisplay);
};

export { updateCalculatorView };
