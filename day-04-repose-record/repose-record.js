var moment = require('moment');
var _ = require('lodash');

const reposeRecord = input => {
  const parsedInput = input.split("\n")
  .map(x => x.replace("]", "|")
  .trim())
  .map(x => x.split("|")
  .map(x => x.replace("[", "")));
  
  let sortedByDate = _.sortBy(parsedInput, function(o) { return new moment(o[0]); });

  console.log("split input = ", splitInput);
};

module.exports = reposeRecord;
