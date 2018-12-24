var _ = require("lodash");

const memoryManuever = (input) => {
    let splitInput = input.split(" ").map((x) => x.trim()).map( (x) => parseInt(x));
    let metadataList = [];
    while(splitInput.length > 0) {
        const children = splitInput[0];
        const metaDataCount = splitInput[1];
        _.pullAt(splitInput, [0, 1]);

        for(let i = 0; i<metaDataCount; i++) {
            let iterator = (children === 0) ? 0: splitInput.length -1;
            metadataList.push(splitInput[iterator]);
            _.pullAt(splitInput, iterator);
        }
    }
    return _.sum(metadataList);
};

module.exports = memoryManuever;