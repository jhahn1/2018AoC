var _ = require("lodash");

const alchemicalReduction = (input) => {
  if(input.length > 0) {
    let splitInput = input.split("");

    for (let i = 0; i < splitInput.length; i++) {
      let nextIndex = (i === splitInput.length)? splitInput[0] : splitInput[i+1];
      let currentNext = splitInput[i] + nextIndex;
      let currentNextUppercase = _.toUpper(currentNext);
      let ucCurrent = _.upperCase(splitInput[i]);
      let ucNext = _.upperCase(nextIndex);

      if((splitInput[i] === _.toUpper(splitInput[i]) && nextIndex !== _.toUpper(nextIndex))
      ||(splitInput[i] === _.toLower(splitInput[i]) && nextIndex !== _.toLower(nextIndex))) {
        const removedList = _.remove(splitInput, function(n) {
            return n === splitInput[i] && n === splitInput[i + 1];
          });
          const newString = removedList.join();
    
          return alchemicalReduction(newString);
      }
    }
  }
  console.log("input length = ", input.length);
  return input.length;
};

module.exports = alchemicalReduction;
