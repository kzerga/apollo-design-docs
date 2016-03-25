function handleChange(name, newValue) {
  let newState = {};
  newState[name] = newValue;
  this.setState(newState);
}

export default (element, stateName) => ({
  value: element.state[stateName],
  requestChange: handleChange.bind(element, stateName)
});
