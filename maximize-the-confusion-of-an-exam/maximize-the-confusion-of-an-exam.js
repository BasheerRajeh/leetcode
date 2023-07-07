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
        for (let i = 0; i < answerKey.length; i++) {
            trueCount += (answerKey[i] === 'T' ? 1 : 0);
            falseCount += (answerKey[i] === 'F' ? 1 : 0);
                          
            while (trueCount > k) {
                trueCount -= (answerKey[startTrue] === 'T' ? 1 : 0);
                startTrue++;
            }
            while (falseCount > k) {
                falseCount -= (answerKey[startFalse] === 'F' ? 1 : 0);
                startFalse++;
            }
              
            longestTrueWindow = Math.max(longestTrueWindow, i - startTrue + 1);
            longestFalseWindow = Math.max(longestFalseWindow, i - startFalse + 1);
        }

        return Math.max(longestTrueWindow,longestFalseWindow);
};