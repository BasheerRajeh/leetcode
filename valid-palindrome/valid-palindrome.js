/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (word) {
    word = word.toUpperCase();
    let s = 0, e = word.length - 1;
    while (s <= e) {
        if (!letterOrNumbers(word[s])) {
            let x = word[s];
            s++;
            continue;
        }
        if (!letterOrNumbers(word[e])) {
            e--;
            continue;
        }
        if (word[s] !== word[e]) {
            return false;
        }
        s++, e--;
    }
    return true;
};

var letterOrNumbers = function(ch){
    return (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')  
}