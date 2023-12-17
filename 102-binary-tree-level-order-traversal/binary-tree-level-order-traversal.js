/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = []
    queue.push({node: root, level: 0})

    const res = Array().map(()=> Array())
    
    while(queue.length > 0) {
        const {node, level} = queue.shift()
        
        if(!node) continue
        if(res[level])
            res[level].push(node.val)
        else res[level] = [node.val]

        const left = node.left, right = node.right
        if(left) {
            queue.push({node: left, level: level + 1})
        } 
        if(right) {
            queue.push({node: right, level: level + 1})
        } 
    }

    return res
};