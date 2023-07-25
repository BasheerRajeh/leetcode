/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length - 1;

    while(l < r){
        let m = Math.floor((l + r) / 2);
        if(arr[m] < arr[m + 1]){
            l = m + 1;
        }else{
            r = m
        }
    }
    return l;
};