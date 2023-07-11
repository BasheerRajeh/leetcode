/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const addParent = (cur, parent) =>{
        if(cur){
            cur.parent = parent;
            addParent(cur.left, cur)
            addParent(cur.right, cur)
        }
    }
    addParent(root, null);
    const ans = [];
    const visit = new Set();

    const dfs = (cur, dist)=>{
        if(!cur || visit.has(cur))
            return

        visit.add(cur);
        
        if(dist === 0){
            ans.push(cur.val);
            return;
        }

        dfs(cur.parent, dist - 1)
        dfs(cur.left, dist - 1)
        dfs(cur.right, dist - 1)
    }

    dfs(target, k);

    return ans;
};






