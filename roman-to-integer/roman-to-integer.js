/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNum = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M:1000
  };

  let result = 0;

  for(let i = 0; i < s.length - 1; i++){
    if(romanNum[s[i]] < romanNum[s[i + 1]]){
      result -= romanNum[s[i]];  
    }else{
      result += romanNum[s[i]]
    }
  }

  return result + romanNum[s[s.length - 1]];
};