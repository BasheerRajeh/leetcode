/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current = gain[0];
    let maxAltitude = Math.max(current, 0);
    for(let i = 1; i < gain.length; i++){
        current += gain[i];
        if(current > maxAltitude){
            maxAltitude = current;
        }
    }
    return maxAltitude;
};