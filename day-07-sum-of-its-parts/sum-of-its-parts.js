var _ = require("lodash");

let instructions = {};
let stepOrder = "";

const sumOfItsParts = input => {
  let splitInput = input.split("\n").forEach(element => {
    const separation = _.trimStart(element)
      .split(" ")
      .map(x => x.trim());
    let constraint = separation[1];
    let step = separation[7];
    let stepConstraints = [];

    stepConstraints = instructions[step] || [];
    stepConstraints.push(constraint);
    instructions[step] = stepConstraints;

    if (instructions[constraint] === undefined) {
      instructions[constraint] = [];
    }
  });

  while (_.keys(instructions).length > 0) {
    let nextStep = findNextStep(instructions);
    instructions = _.omit(instructions, nextStep);
    instructions = removeConstraints(instructions, nextStep);
    stepOrder += nextStep;
  }
  return stepOrder;
};

const findNextStep = input => {
  let nextSteps = [];

  _.forIn(input, function(value, key) {
    if (value.length === 0) {
      nextSteps.push(key);
    }
  });

  const sorted = nextSteps.sort();
  return nextSteps[0];
};

const removeConstraints = (input, nextStep) => {
  return _.forIn(input, function(value, key) {
    if (_.includes(value, nextStep)) {
      _.pull(value, nextStep);
    }
  });
};

module.exports = sumOfItsParts;
