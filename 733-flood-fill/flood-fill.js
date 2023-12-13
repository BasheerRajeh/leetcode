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
            if(r < image.length - 1) 
                dfs(r + 1, c)
            if(r > 0) 
                dfs(r - 1, c)
            if(c < image[0].length - 1) 
                dfs(r, c + 1)
            if(c > 0)  
                dfs(r, c - 1)
        }
    }
    dfs(sr, sc)
    return image
};