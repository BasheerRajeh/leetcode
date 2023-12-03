/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1
    const res = []

    const dfs = (cur, path) => {
        path.push(cur)

        if(cur === target) {
            res.push(path)
            return
        }
        for(let edge of graph[cur]){
            dfs(edge, path.slice())
        }
    }
    dfs(0, [])
    return res;
};