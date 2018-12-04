const howYouSliceIt = (input) => {
    
    let splitInput = input.split("\n")
    .map( (x) => x.trim().split(" "));
    let coordinates = {};
    let loneClaim = {};
    splitInput.forEach(element => {
        const id = element[0].replace("#"," ").trim();
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

    splitInput.forEach(element => {
        const id = element[0].replace("#"," ").trim();
        const xy = element[2].replace(":"," ").trim().split(",");
        let x = parseInt(xy[0]);
        let y = parseInt(xy[1]);

        const widthHeight = element[3].split("x");
        let width = parseInt(widthHeight[0]);
        let height = parseInt(widthHeight[1]);

        let yHeight = y+height;
        let xWidth = x+width;
        loneClaim[id] = true;

        for(let i=x; i<xWidth; i++) {
            for(let j=y; j<yHeight; j++) {
                let coordinateCount = coordinates[`${i},${j}`];
                if(coordinateCount > 1) {
                    loneClaim[id] = false;
                    break;
                }
            }
        }
    });

    const lonelyClaim = Object.keys(loneClaim).filter( key => loneClaim[key] === true);
    if(lonelyClaim.length !== 1) {
        console.log("Found more than one lonely claim!");
    }
    return lonelyClaim[0];
}

module.exports = howYouSliceIt;