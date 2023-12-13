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
 * @return {boolean}
 */

var heightDiff = (root, h = 0) => {
    if(!root)
        return h
    
    const hl = heightDiff(root.left, h + 1)
    const hr = heightDiff(root.right, h + 1)

    if(hl === -1 || hr === -1 || Math.abs(hl - hr) > 1)
        return -1

    return Math.max(hl, hr)
}

var isBalanced = function(root) {
    return heightDiff(root) !== -1
};