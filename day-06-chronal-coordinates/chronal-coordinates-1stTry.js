const chronalCoordinates = input => {
  let splitInput = input.split("\n").map(x => x.trim());

  splitInput.forEach(element => {
    const currentElement = element
      .split(",")
      .map(x => x.trim())
      .map(x => parseInt(x));

    const currentX = currentElement[0];
    const currentY = currentElement[1];
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

      if (iteratorX !== currentX && iteratorY != currentY) {
        if (iteratorX >= currentX && iteratorY >= currentY) {
          if (rightLimit === null && iteratorX !== currentX) {
            rightLimit = currentIterator;
          } else if (rightLimit !== null && rightLimit[0] > iteratorX) {
            rightLimit = currentIterator;
          }

          if (lowerLimit === null && iteratorY !== currentY) {
            lowerLimit = currentIterator;
          } else if (lowerLimit !== null && lowerLimit[1] > iteratorY) {
            lowerLimit = currentIterator;
          }
        }

        if (iteratorX <= currentX && iteratorY <= currentY) {
          if (leftLimit === null && iteratorX !== currentX) {
            leftLimit = currentIterator;
          } else if (leftLimit !== null && leftLimit[0] < iteratorX) {
            leftLimit = currentIterator;
          }

          if (upperLimit === null && iteratorY !== currentY) {
            upperLimit = currentIterator;
          } else if (upperLimit !== null && upperLimit[1] < iteratorY) {
            upperLimit = currentIterator;
          }
        }

        if (iteratorX <= currentX && iteratorY >= currentY) {
          if (leftLimit === null && iteratorX !== currentX) {
            leftLimit = currentIterator;
          } else if (leftLimit !== null && leftLimit[0] < iteratorX) {
            leftLimit = currentIterator;
          }

          if (lowerLimit === null && iteratorY !== currentY) {
            lowerLimit = currentIterator;
          } else if (lowerLimit !== null && lowerLimit[1] > iteratorY) {
            lowerLimit = currentIterator;
          }
        }

        if (iteratorX >= currentX && iteratorY <= currentY) {
          if (rightLimit === null && iteratorX !== currentX) {
            rightLimit = currentIterator;
          } else if (rightLimit !== null && rightLimit[0] > iteratorX) {
            rightLimit = currentIterator;
          }

          if (lowerLimit === null && iteratorY !== currentY) {
            upperLimit = currentIterator;
          } else if (lowerLimit !== null && lowerLimit[1] > iteratorY) {
            upperLimit = currentIterator;
          }
        }
      }
      console.log("nonsense");
    }
    console.log("nonsense");
  });
};

const getLimits = element => {};

module.exports = chronalCoordinates;
