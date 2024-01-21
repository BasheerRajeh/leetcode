/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const setPath = new Set()

    const outOfBoundry = (x, y) => (x < 0 || y < 0 || x >= board.length || y >= board[0].length)

    const backtrack = (x, y, i) => {
        if(i === word.length) 
            return true
        if(outOfBoundry(x, y) || setPath.has(`${x},${y}`) || board[x][y] !== word[i]) {
            return false
        }

        setPath.add(`${x},${y}`)
        
        const res = backtrack(x + 1, y, i + 1) || backtrack(x - 1, y, i + 1) || backtrack(x, y + 1, i + 1) || backtrack(x, y - 1, i + 1)

        setPath.delete(`${x},${y}`)

        return res
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(backtrack(i, j, 0)) return true
        }
    }

    return false

};