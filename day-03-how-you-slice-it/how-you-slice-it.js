const howYouSliceIt = (input) => {

    let splitInput = input.split("\n")
    .map( (x) => x.trim().split(" "));
    let coordinates = {};
    splitInput.forEach(element => {
        const xy = element[2].replace(":"," ").trim().split(",");
        let x = parseInt(xy[0]);
        let y = parseInt(xy[1]);

        const widthHeight = element[3].split("x");
        let width = parseInt(widthHeight[0]);
        let height = parseInt(widthHeight[1]);

        let yHeight = y+height;
        let xWidth = x+width;

        for(let i=x; i<xWidth; i++) {
            for(let j=y; j<yHeight; j++) {
                coordinates[`${i},${j}`] = ( coordinates[`${i},${j}`] || 0 ) + 1; 
            }
        }
    });

    const numberOfOverlap = Object.values(coordinates).filter( (x) => x > 1);
    return numberOfOverlap.length;

}

module.exports = howYouSliceIt;