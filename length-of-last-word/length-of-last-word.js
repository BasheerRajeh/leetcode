/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let foundLastWord  = false;
    let res = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i]!==' '){
            foundLastWord  = true;
            res++;
        } 
        else if(foundLastWord ){
            break;
        } 
    }
    return res;
};