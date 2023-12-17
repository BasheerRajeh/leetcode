/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const onPath = new Array(numCourses).fill(false);
    const visited = new Array(numCourses).fill(false);
    let hasCycle = false;

    const graph = buildGraph(numCourses, prerequisites);

    for (let i = 0; i < numCourses; i++) {
        traverse(graph, i);
    }

    return !hasCycle;

    function traverse(graph, s) {
        if (onPath[s]) {
            hasCycle = true;

            return;
        }

        if (visited[s] || hasCycle) {
            return;
        }
        visited[s] = true;
        onPath[s] = true;
        for (let t of graph[s]) {
            traverse(graph, t);
        }
        onPath[s] = false;
    }

    function buildGraph(numCourses, prerequisites) {
        const graph = Array(numCourses).fill(0).map(() => []);
        for (let edge of prerequisites) {
            const from = edge[1];
            const to = edge[0];
            graph[from].push(to);
        }
        return graph;
    }
};
