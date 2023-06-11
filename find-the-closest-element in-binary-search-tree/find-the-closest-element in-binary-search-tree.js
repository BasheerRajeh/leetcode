var findClosestValueInTree = function (root, value) {
    let closest = Infinity;

    while (root) {
        if (Math.abs(root.val - value) < Math.abs(closest - value)) {
            closest = root.val;
        }
        if (root.val > value) root = root.left;
        else if (root.val < value) root = root.right;
        else break;
    }

    return closest;
};
