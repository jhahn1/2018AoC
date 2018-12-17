var _ = require("lodash");

const chronalCoordinates = input => {
  let splitInput = input.split("\n").map(x => x.trim());
  let xValues = [];
  let yValues = [];
  let potentials = [];

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

  splitInput.forEach(element => {
    let newEl = element
      .split(",")
      .map(x => x.trim())
      .map(x => parseInt(x));
    if (
      xValues[0] < newEl[0] &&
      xValues[xValues.length - 1] > newEl[0] &&
      yValues[0] < newEl[0] &&
      yValues[yValues.length - 1] > newEl[1]
    ) {
      potentials.push(newEl);
      console.log("Got potential");
    }
  });

  potentials.forEach(element => {
    let rightLimit = null;
    let leftLimit = null;
    let upperLimit = null;
    let lowerLimit = null;

    for (let i = 0; i < splitInput.length; i++) {
      const currentIterator = splitInput[i]
        .split(",")
        .map(x => x.trim())
        .map(x => parseInt(x));

      const iteratorX = currentIterator[0];
      const iteratorY = currentIterator[1];

      if (iteratorX !== element[0] && iteratorY != element[1]) {
        if (iteratorX >= element[0] && iteratorY >= element[1]) {
          if (rightLimit === null) {
            rightLimit = currentIterator;
          } else if (rightLimit !== null && rightLimit[0] > iteratorX) {
            rightLimit = currentIterator;
          } else if (
            rightLimit[0] === iteratorX &&
            Math.abs(element[1] - rightLimit[1]) > Math.abs(element[1] - iteratorY)
          ) {
            rightLimit = currentIterator;
          }

          if (lowerLimit === null) {
            lowerLimit = currentIterator;
          } else if (lowerLimit !== null && lowerLimit[1] > iteratorY) {
            lowerLimit = currentIterator;
          } else if (
            leftLimit[0] === iteratorX) {
            let val = Math.abs(element[1] - leftLimit[1]) > Math.abs(element[1] - iteratorY);
            console.log("Difference = ", val);
            leftLimit = currentIterator;
          }
        }

        if (iteratorX <= element[0] && iteratorY <= element[1]) {
          if (leftLimit === null) {
            leftLimit = currentIterator;
          } else if (leftLimit !== null && leftLimit[0] < iteratorX) {
            leftLimit = currentIterator;
          } else if (
            leftLimit[0] === iteratorX) {
            let val = Math.abs(element[1] - leftLimit[1]) > Math.abs(element[1] - iteratorY);
            console.log("Difference = ", val);
            leftLimit = currentIterator;
          }

          if (upperLimit === null) {
            upperLimit = currentIterator;
          } else if (upperLimit !== null && upperLimit[1] < iteratorY) {
            upperLimit = currentIterator;
          } else if (
            upperLimit[1] === iteratorY &&
            Math.abs(element[0] - upperLimit[0]) > Math.abs(element[0] - iteratorX)
          ) {
            upperLimit = currentIterator;
          }
        }

        if (iteratorX <= element[0] && iteratorY >= element[1]) {
          if (leftLimit === null) {
            leftLimit = currentIterator;
          } else if (leftLimit !== null && leftLimit[0] < iteratorX) {
            leftLimit = currentIterator;
          } else if (
            leftLimit[0] === iteratorX) {
            let val = Math.abs(element[1] - leftLimit[1]) > Math.abs(element[1] - iteratorY);
            console.log("Difference = ", val);
            leftLimit = currentIterator;
          }

          if (lowerLimit === null) {
            lowerLimit = currentIterator;
          } else if (lowerLimit !== null && lowerLimit[1] > iteratorY) {
            lowerLimit = currentIterator;
          } else if (
            lowerLimit[1] === iteratorY &&
            Math.abs(element[0] - lowerLimit[0]) > Math.abs(element[0] - iteratorX)
          ) {
            lowerLimit = currentIterator;
          }
        }

        if (iteratorX >= element[0] && iteratorY <= element[1]) {
          if (rightLimit === null) {
            rightLimit = currentIterator;
          } else if (rightLimit !== null && rightLimit[0] > iteratorX) {
            rightLimit = currentIterator;
          } else if (
            rightLimit[0] === iteratorX &&
            Math.abs(element[1] - rightLimit[1]) > Math.abs(element[1] - iteratorY)
          ) {
            rightLimit = currentIterator;
          }

          if (lowerLimit === null) {
            upperLimit = currentIterator;
          } else if (lowerLimit !== null && lowerLimit[1] > iteratorY) {
            upperLimit = currentIterator;
          } else if (
            upperLimit[1] === iteratorY &&
            Math.abs(element[0] - upperLimit[0]) > Math.abs(element[0] - iteratorX)
          ) {
            upperLimit = currentIterator;
          }
        }
      }
    }
    console.log("nonsense");
  });
};

module.exports = chronalCoordinates;
