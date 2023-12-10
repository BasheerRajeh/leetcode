/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = matrix => matrix[0].map((_, i) => matrix.map(b => b[i]))