/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = [[1]];
    for(let i = 1; i < numRows; i++){
        const arr = [];
        arr.push(1)
        for(let j = 0; j< ans[i - 1].length - 1; j++){
            arr.push(ans[i - 1][j]+ans[i - 1][j+1]);
        }
        arr.push(1)
        ans.push(arr);
    }
    return ans;
};