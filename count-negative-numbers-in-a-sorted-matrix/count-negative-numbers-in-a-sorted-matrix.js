/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let row = 0, col = cols - 1;
    let count = 0;

    while(rows > row && col >= 0){
        if(grid[row][col] < 0){
            count += rows - row;
            col--;
        }else{
            row++;
        }
    }
    
    return count;
};
