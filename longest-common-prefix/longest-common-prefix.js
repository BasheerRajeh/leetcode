/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minLength = Math.min(...strs.map((s)=>s.length));
    let i = 0;
    let prefix = [];
    let match = true;
    while(match && i < minLength){
      let c = strs[0][i];
      strs.map((s)=> {
        if(s[i] !== c ) match = false;
      });
      i++
      if(match) prefix.push(c);
      else break;
    }

    return prefix.join('');
};