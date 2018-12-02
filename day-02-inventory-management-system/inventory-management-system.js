const inventoryManagementSystem = (input) => {
    const parsedInput = input.split('\n').map((x) => x.trim());
    let threeCount = 0;
    let twoCount = 0;

    parsedInput.forEach(function(x) {
        var counts = {};
        x.split("")
        .forEach( function(i) {
            counts[i] = (counts[i] || 0)+1;
        });
        
        if(Object.values(counts).indexOf(2) > -1) {
            twoCount++;
        }

        if(Object.values(counts).indexOf(3) > -1) {
            threeCount++;
        }
    });

    return twoCount * threeCount;
}

module.exports = inventoryManagementSystem;