/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const simpleRules = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M:1000
  };

  const complexRules = {
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900
  };

  let result = 0;
  for(let index = 0; index< s.length; index++ ){
    const sub = s.slice(index, index + 2);
    if(complexRules[sub]){
      result += complexRules[sub];
      index++;
    }else {
      result += simpleRules[s[index]]; 
    }
  }
  return result;

};