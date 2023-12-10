/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m = matrix.length, n = matrix[0].length

    const transpose = Array(n).fill().map(() => Array(m).fill(0))

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            transpose[j][i] = matrix[i][j]
        }
    }
    
    return transpose
};