var _ = require("lodash");

const chronalCoordinates = input => {
  let xValues = [];
  let yValues = [];
  let areaSizes = {};
  let splitInput = input.split("\n").map(x => x.trim());

  splitInput.forEach(element => {
    let newEl = element
      .split(",")
      .map(x => x.trim())
      .map(x => parseInt(x));

    xValues.push(newEl[0]);
    yValues.push(newEl[1]);
  });

  xValues.sort();
  yValues.sort();

  for (let x = xValues[0]; x < xValues[xValues.length - 1]; x++) {
    for (let y = yValues[0]; y < yValues[yValues.length - 1]; y++) {
      let closestElement = null;
      let closestDistance = null;
      splitInput.forEach(element => {
        let formattedElement = element
          .split(",")
          .map(x => x.trim())
          .map(x => parseInt(x));

        const thisDistance = getDistance(
          formattedElement,
          x,
          y,
          closestDistance
        );

        if (closestDistance === null || thisDistance < closestDistance) {
          closestElement = formattedElement;
          closestDistance = parseInt(thisDistance);
        }
      });
      areaSizes[closestElement] = (areaSizes[closestElement] || 0) + 1;
    }
  }
  return largestArea = _.max(Object.values(areaSizes));
};

const getDistance = (element, x, y) => {
  return Math.abs(element[0] - x) + Math.abs(element[1] - y);
};

module.exports = chronalCoordinates;
