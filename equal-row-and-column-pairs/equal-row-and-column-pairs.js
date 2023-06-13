/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const hash = {};

    let res = 0;

    for(let arr of grid){
        let key = arr.join(',');
        if(hash[key]){
            hash[key] += 1;
        }else{
            hash[key] = 1;
        }
    }

    for(let i = 0; i< grid[0].length; i++){
        let col = grid.map(ar=>ar[i]).join(',');
        if(hash[col]){
            res+=hash[col];
        }
    }
    
    return res;
};
