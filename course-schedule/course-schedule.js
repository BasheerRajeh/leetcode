/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const visiting = new Set();
    const visited = new Set();

    for(let [v, e] of prerequisites){
        if(graph.has(v)){
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v,edges);
        }else{
            graph.set(v,[e]);
        }
    }

    const dfs = v=>{
        visiting.add(v);
        let edges = graph.get(v);
        if(edges){
            for(let e of edges){
                if(visited.has(e)){
                    continue;
                }

                if(visiting.has(e)){
                    return true;
                }

                if(dfs(e)){
                    return true;
                }
            }
        }

        visiting.delete(v);
        visited.add(v);
        return false;

    }

    for(const [v, e] of graph){
        if(dfs(v)){
            return false;
        }
    }

    return true;

};