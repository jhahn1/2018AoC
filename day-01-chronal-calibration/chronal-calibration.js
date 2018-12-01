const chronalCalibration = (input) => {
    console.log("Input = ", input);
    const parsedInput = input.split('\n').map((x) => x.trim()).map( (x) => parseInt(x));
    
    return frequency = parsedInput.reduce((accumulator, currentValue) => {
        return accumulator += currentValue;
    })
}

module.exports = chronalCalibration;