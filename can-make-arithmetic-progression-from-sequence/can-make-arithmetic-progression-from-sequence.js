/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    const diff = arr[0] - arr[1];
    for(let i = 2; i<arr.length ; i++){
        if(diff !== arr[i-1] - arr[i]) return false;
    }
    return true;
};
