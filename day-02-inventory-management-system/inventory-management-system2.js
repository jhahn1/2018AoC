const inventoryManagement = input => {
  const parsedInput = input.split("\n").map(x => x.trim());
  let sameCharacters = "";
  let foundSingleDifference = false;
  let foundWord = "";

  parsedInput.forEach(element => {
    let topElement = element.split("");
    for (let i = 0; i < parsedInput.length; i++) {
      let currentElement = parsedInput[i].split("");
      if (parsedInput[i] !== element && foundWord.length ===0) {
        for (let j = 0; j < currentElement.length; j++) {
          if (currentElement[j] === topElement[j]) {
            sameCharacters += currentElement[j];
          } else if (foundSingleDifference) {
            sameCharacters = "";
            break;
          } else {
            foundSingleDifference = true;
          }
          console.log("Starting word = ", sameCharacters);
        }
        console.log("Word = ", sameCharacters);
        if (sameCharacters.length > 0) {
          foundWord = sameCharacters;
        }
      }
    }
  });

  return sameCharacters;
};

module.exports = inventoryManagement;
