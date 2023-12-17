/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, clonedNodes = new Map()) {
    if(!node) return null

    if(clonedNodes.has(node)) return clonedNodes.get(node)

    const clone = new Node(node.val)
    clonedNodes.set(node, clone)

    for(let neighbor of node.neighbors){
        const clonedNeighbor = cloneGraph(neighbor, clonedNodes)
        clone.neighbors.push(clonedNeighbor)
    }

    return clone
};