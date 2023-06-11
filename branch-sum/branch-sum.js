var branchSums = function (root) {
    const sums = [];
    calculateSums(root, 0, sums);
    return sums;
};

var calculateSums = function (root, sum, sums) {
    if (!root) return;

    let newSum = sum + root.val;

    if (!root.left && !root.right) {
        sums.push(newSum);
        return;
    }

    calculateSums(root.left, newSum, sums);
    calculateSums(root.right, newSum, sums);
};
