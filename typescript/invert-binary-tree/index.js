/**
 * Definition for a binary tree node.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function invertTree(root) {
    var _a, _b;
    if (root === null) {
        return null;
    }
    if (((_a = root.right) === null || _a === void 0 ? void 0 : _a.val) > ((_b = root.left) === null || _b === void 0 ? void 0 : _b.val)) {
        var left = new TreeNode(root.left.val, root.left.left, root.left.right);
        root.left = root.right;
        root.right = left;
    }
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
