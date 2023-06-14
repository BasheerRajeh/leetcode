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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minimumDifference = Infinity;
    const stack = [];
    let prevNode = root;
    stack.push(root);

    while(stack.length > 0){
        const node = stack.pop();
        let leftDiff = Infinity, rightDiff = Infinity;
        if(node.left){
            let temp = node.left;
            while(temp.right){
                temp = temp.right;
            }
            leftDiff = Math.abs(node.val - temp.val);
            stack.push(node.left)
        }
        if(node.right){
            let temp = node.right;
            while(temp.left){
                temp = temp.left;
            }
            rightDiff = Math.abs(node.val - temp.val);
            stack.push(node.right)
        }

        minimumDifference = Math.min(minimumDifference, leftDiff, rightDiff);
        
        if(minimumDifference === 0) 
            break;
    }

    return minimumDifference;
};