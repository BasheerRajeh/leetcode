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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
   const res = []

    const btTrav = (root, path) => {
        if(!root) return;
        
        if(!root.left && !root.right) 
            res.push(path + root.val)
        if(root.left) 
            btTrav(root.left, path + root.val + '->')
        if(root.right) 
            btTrav(root.right, path + root.val + '->')
    }

    btTrav(root, '')
    return res;
};