/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let shapes = {
      '}' : '{', ']': '[', ')': '('
    };

    let stack = [];

    for(let i = 0; i< s.length; i++){
      if (stack.length > 0 && stack[stack.length - 1] === shapes[s[i]]){
        stack.pop();
        continue;
      }
      stack.push(s[i])
    }

    return stack.length === 0;
};