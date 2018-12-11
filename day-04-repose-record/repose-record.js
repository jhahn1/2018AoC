var moment = require("moment");
var _ = require("lodash");

const reposeRecord = input => {
  const parsedInput = input
    .split("\n")
    .map(x => x.replace("]", "|").trim())
    .map(x => x.split("|").map(x => x.replace("[", "")));

  let currentGaurd = 0;
  let asleepMin = 0;
  let wakeMin = 0;
  let sleepingMinutes = {};
  let gaurdList = {};
  let topGaurd = 0;
  let sortedByDate = _.sortBy(parsedInput, function(o) {
    return new moment(o[0]);
  });

  sortedByDate.forEach(element => {
    sleepingMinutes = {};
    if (_.includes(element[1], "#")) {
      element[1]
        .trim()
        .split(" ")
        .forEach(x => {
          if (_.includes(x, "#")) {
            currentGaurd = x.replace("#", " ").trim();
          }
        });
    } else {
      if (element[1] === " wakes up") {
        wakeMin = parseInt(element[0].split(" ")[1].split(":")[1]);
        for (let i = asleepMin; i < wakeMin; i++) {
          if (gaurdList[currentGaurd]) {
            sleepingMinutes = gaurdList[currentGaurd];
          }
          sleepingMinutes[i] = (sleepingMinutes[i] || 0) + 1;
          gaurdList[currentGaurd] = sleepingMinutes;
        }
      } else {
        asleepMin = parseInt(element[0].split(" ")[1].split(":")[1]);
      }
    }
  });

  let highSum = 0;
  _.toPairs(gaurdList).forEach(element => {
    let newArray = [];
    _.toPairs(element[1]).forEach(x => {
      newArray.push(x[1]);
    });
    let sum = _.sum(newArray);
    if (sum > highSum) {
      topGaurd = element[0];
      highSum = sum;
    }
  });

  const topGaurdList = gaurdList[topGaurd];
  const sortedTopGaurdMinutes = Object.values(topGaurdList).sort(
    (a, b) => b - a
  );
  const topMinute = Object.keys(gaurdList[topGaurd]).filter(
    key => topGaurdList[key] === sortedTopGaurdMinutes[0]
  );
  return parseInt(topGaurd) * parseInt(topMinute[0]);
};

module.exports = reposeRecord;
