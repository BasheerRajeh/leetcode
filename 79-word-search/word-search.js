/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const rows = board.length
    const cols = board[0].length

    const cells = new Set()

    const check = (r, c, i) => {
        if(i === word.length) return true
        
        if( r >= rows 
            || c >= cols 
            || r < 0 
            || c < 0 
            || word[i] !== board[r][c]
            || cells.has(`${r}-${c}`)
            )
            return false
        
        cells.add(`${r}-${c}`)
        const res = check(r+1, c, i+1) || check(r, c+1, i+1) || check(r-1, c, i+1) || check(r, c-1, i+1)
        cells.delete(`${r}-${c}`)
        return res
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++)
            if(check(i, j, 0)) 
                return true;
    }

    return false;
};