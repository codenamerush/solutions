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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isBalanced = function(root) {
    function check(node) {
        if (!node) return 0; // height of empty tree = 0

        let left = check(node.left);
        if (left === -1) return -1; // left subtree unbalanced

        let right = check(node.right);
        if (right === -1) return -1; // right subtree unbalanced

        if (Math.abs(left - right) > 1) return -1; // not balanced at this node
        return Math.max(left, right) + 1; // return height
    }

    return check(root) !== -1;
};

// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(3);
// root.left.left.left = new TreeNode(4);
// root.right = new TreeNode(5);


let root = new TreeNode(6); 
root.left = new TreeNode(2); 
root.right = new TreeNode(8); 
root.left.left = new TreeNode(0); 
root.left.right = new TreeNode(4); 
root.left.right.left = new TreeNode(3); 
root.left.right.right = new TreeNode(5); 
root.right.left = new TreeNode(7); 
root.right.right = new TreeNode(9);

console.log(isBalanced(root))