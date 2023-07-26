/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const len = dist.length;
    let temp = hour - (len-1); 
    if(temp < 0) return -1;

    const maxSpeed = 10000000;
    let minSpeed = Number.MAX_SAFE_INTEGERInfinity;
    let l = 0, 
        r = maxSpeed, 
        mid = l + Math.floor((r - l) / 2);

    while(l <= r){
        const speed = mid;
        const time = timeTaken(speed);
        if(time <= hour){
            minSpeed = speed;
            r = mid - 1;
        }else{
            l = mid + 1;
        }
        mid = l + Math.floor((r - l) / 2);
    }
    return minSpeed === Number.MAX_SAFE_INTEGERInfinity
            ? -1
            : minSpeed;

    function timeTaken(speed){
        let time = 0;
        for(let i = 0; i < len - 1; i++){
            time += Math.ceil(dist[i] / speed);
        }
        time += dist[len -1 ] / speed;
        return time;
    }
};