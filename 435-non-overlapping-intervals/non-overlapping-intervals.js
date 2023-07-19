/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], removed = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev[1]) 
            removed++;
        else 
            prev = intervals[i];
    }
    return removed;
};