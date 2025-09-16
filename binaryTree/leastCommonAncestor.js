/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
    let node = root;

    while (node) {
        if (p.val < node.val && q.val < node.val) {
            node = node.left;
        } else if (p.val > node.val && q.val > node.val) {
            node = node.right;
        } else {
            return node; // Split point found
        }
    }

    return null;
};


// ----------- Build Sample BST -----------
//       6
//      / \
//     2   8
//    / \ / \
//   0  4 7  9
//     / \
//    3   5

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

// ----------- Test Cases -----------

// Example 1: LCA of 2 and 8 → 6
let p = root.left;       // node with value 2
let q = root.right;      // node with value 8
console.log("LCA of 2 and 8:", lowestCommonAncestor(root, p, q).val); // 6

// Example 2: LCA of 2 and 4 → 2
p = root.left;           // node with value 2
q = root.left.right;     // node with value 4
console.log("LCA of 2 and 4:", lowestCommonAncestor(root, p, q).val); // 2

// Example 3: LCA of 3 and 5 → 4
p = root.left.right.left; // node with value 3
q = root.left.right.right; // node with value 5
console.log("LCA of 3 and 5:", lowestCommonAncestor(root, p, q).val); // 4