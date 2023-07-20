/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    const stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        
        if ((stack.length === 0 || stack[stack.length -1] < 0) && asteroid < 0 ) {
            stack.push(asteroid);
            
        } else if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            const atr = stack.pop();
            if (Math.abs(atr) > Math.abs(asteroid)) {
                stack.push(atr);
            } else if (Math.abs(atr) < Math.abs(asteroid)) {
                i--;
            } else { 
                continue;
            }
        }
    }
    
    return stack;
    
};
