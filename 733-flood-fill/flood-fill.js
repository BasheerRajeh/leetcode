/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] === color) return image

    const outOfBoundry = (r, c) => r < 0 || c < 0 || r >= image.length || c >= image[0].length

    const target = image[sr][sc]

    const dfs = (r, c) => {
        if (image[r][c] === target) {
            image[r][c] = color
            !outOfBoundry(r + 1, c) && dfs(r + 1, c)
            !outOfBoundry(r - 1, c) && dfs(r - 1, c)
            !outOfBoundry(r, c + 1) && dfs(r, c + 1)
            !outOfBoundry(r, c -1 ) && dfs(r, c - 1)
        }
    }
    dfs(sr, sc)
    return image
};