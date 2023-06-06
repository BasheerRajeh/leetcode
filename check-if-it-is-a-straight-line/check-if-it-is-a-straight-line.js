/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slop = calcSlop(coordinates[0], coordinates[1])
    for(let i = 2; i< coordinates.length; i++){
        if(slop !== calcSlop(coordinates[i - 1], coordinates[i]))
            return false;
    }
    return true;
};


var calcSlop = function(point1, point2){
    // slop = (y2 - y1) / (x2 - x1)
    if (point2[0] - point1[0] === 0) {
        return Infinity; // Vertical line, special value indicating vertical alignment
    }
    return (point2[1] - point1[1])/(point2[0] - point1[0])
}