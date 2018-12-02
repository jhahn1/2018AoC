const chronalCalibration = (input) => {
    const parsedInput = 
            input.split('\n')
            .map((x) => x.trim())
            .map((x) => parseInt(x));
    
    let iterator = 0;
    let iterations = 1;
    let foundDupFrequency = false;
    let potentialDuplicate = 0;
    const frequencySet = new Set([0]);

    while(!foundDupFrequency) {
        potentialDuplicate += parsedInput[iterator];
        frequencySet.add(potentialDuplicate);
        if(frequencySet.size !== iterations + 1) {
            foundDupFrequency = true;
        }
        if(iterator === parsedInput.length -1) {
            iterator = 0;
        } else {
            iterator++;
        }
        iterations++;
        console.log("potential dup = ", potentialDuplicate);
    }

    console.log("potential dup to return = ", potentialDuplicate);
    return potentialDuplicate;
}

module.exports = chronalCalibration;