/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let n = graph.length;
    const res = new Array(n).fill(0);

    const dfs = node =>{
        if(res[node]!== 0) return res[node] === 2;
        res[node] = 1;
        for(let neighbor of graph[node]){
            if(res[neighbor] === 1 || !dfs(neighbor))
                return false;
        }
        res[node] = 2;
        return true;
    }
    const safe = [];
    for(let i = 0; i < n; i++){
        if(dfs(i))
            safe.push(i)
    }
    return safe;
};