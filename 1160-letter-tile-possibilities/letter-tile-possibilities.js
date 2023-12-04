/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let res = 0;
    
    function permute(str, opt) {
        res++;
        
        for(let i = 0; i < opt.length; i++) {
            if(opt[i] === opt[i-1]) continue;
            permute(str + opt[i], opt.slice(0, i) + opt.slice(i+1));
        }
    }
    permute('', [...tiles].sort().join(''));
    return res-1;
};