/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
        let trueCount = 0;
        let falseCount = 0;
        let longestTrueWindow = 0;
        let longestFalseWindow = 0;
        let startTrue = 0;
        let startFalse = 0;
        const arr = answerKey.split('');
        for (let i = 0; i < arr.length; i++) {
            trueCount += (arr[i] === 'T' ? 1 : 0);
            falseCount += (arr[i] === 'F' ? 1 : 0);
                          
            while (trueCount > k) {
                trueCount -= (arr[startTrue] === 'T' ? 1 : 0);
                startTrue++;
            }
            while (falseCount > k) {
                falseCount -= (arr[startFalse] === 'F' ? 1 : 0);
                startFalse++;
            }
              
            longestTrueWindow = Math.max(longestTrueWindow, i - startTrue + 1);
            longestFalseWindow = Math.max(longestFalseWindow, i - startFalse + 1);
        }

        return Math.max(longestTrueWindow,longestFalseWindow);
};