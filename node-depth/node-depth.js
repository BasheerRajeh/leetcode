var nodeDepths = function (root, depth = 0) {
    if (!root) return 0;
    const leftDepthSum = nodeDepths(root.left, depth + 1);
    const rightDepthSum = nodeDepths(root.right, depth + 1);
    return depth + leftDepthSum + rightDepthSum;
};

var sumDepthAllNode = function (root) {
    let sum = 0;
    const stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let topNode = stack.pop();
        if (!topNode.node) continue;
        sum += topNode.depth;
        stack.push({ node: topNode.left, depth: topNode.depth + 1 });
        stack.push({ node: topNode.right, depth: topNode.depth + 1 });
    }

    return sum;
};
