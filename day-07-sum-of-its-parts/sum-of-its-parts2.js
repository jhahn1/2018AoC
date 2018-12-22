var _ = require("lodash");

let instructions = {};
let numOfSteps = 0;
let workingSteps = [];

const sumOfItsParts = input => {
  input.split("\n").forEach(element => {
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
    if (workingSteps.length > 0) {
      workingSteps.map(element => {
        element[1] = element[1] - 1;
        if (element[1] === 0) {
          instructions = removeConstraints(instructions, element[0]);
        }
      });
    }

    _.remove(workingSteps, function(n) {
      return n[1] === 0;
    });

    let nextSteps = findNextStep(instructions);
    if (nextSteps.length > 0) {
      for (let i = 0; i < 5; i++) {
        if (nextSteps[i] !== undefined) {
          instructions = _.omit(instructions, nextSteps[i]);
          workingSteps.push([nextSteps[i], alphabetMap[nextSteps[i]]]);
        }
      }
    }
    numOfSteps++;
  }
  return numOfSteps;
};

const findNextStep = input => {
  let nextSteps = [];

  _.forIn(input, function(value, key) {
    if (value.length === 0) {
      nextSteps.push(key);
    }
  });

  const sorted = nextSteps.sort();
  return sorted;
};

const removeConstraints = (input, nextStep) => {
  return _.forIn(input, function(value, key) {
    if (_.includes(value, nextStep)) {
      _.pull(value, nextStep);
    }
  });
};

const alphabetMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
};

module.exports = sumOfItsParts;
