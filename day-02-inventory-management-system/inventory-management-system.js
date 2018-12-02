const inventoryManagementSystem = (input) => {
    const parsedInput = input.split('\n').map((x) => x.trim());

    var counts = {};
    parsedInput.forEach(function(x) {
        x.split("")
        .forEach( function(i) {
            counts[i] = (counts[i] || 0)+1;
            console.log("counts = ", counts);
        });
    });

    console.log(parsedInput);
}

module.exports = inventoryManagementSystem;