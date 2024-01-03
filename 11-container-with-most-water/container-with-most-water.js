/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maximumWater = 0
    let left = 0, right = height.length - 1
    while (left < right) {
        const vertical = right - left
        // console.log("\U0001f680 ~ file: index.js:6 ~ maxArea ~ vertical:", vertical)
        const horizontal = Math.min(height[left], height[right])
        // console.log("\U0001f680 ~ file: index.js:7 ~ maxArea ~ horizontal:", horizontal)

        // console.log("\U0001f680 ~ file: index.js:11 ~ maxArea ~ maximumWater:", maximumWater)
        maximumWater = Math.max(maximumWater, vertical * horizontal)
        // console.log("\U0001f680 ~ file: index.js:11 ~ maxArea ~ vertical * horizontal:", vertical * horizontal)
        if (height[left] < height[right]) left++
        else right--
    }

    return maximumWater
};