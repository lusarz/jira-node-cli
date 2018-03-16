module.exports = {
  buildCommand (action, props = []) {
    return action + props.map(prop => ` [${prop}]`).join('');
  }
};
