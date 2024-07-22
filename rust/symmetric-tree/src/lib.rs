// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}
use std::borrow::Borrow;
use std::cell::RefCell;
use std::rc::Rc;

struct Solution {}

impl Solution {
    pub fn is_symmetric(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match root {
            None => false,
            Some(root) => {
                let node = RefCell::borrow(&root);
                Self::compare(node.left.borrow(), node.right.borrow())
            }
        }
    }

    pub fn compare(
        left: &Option<Rc<RefCell<TreeNode>>>,
        right: &Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        match (left, right) {
            // Both subtrees are empty, therefore they are equal
            (None, None) => true,
            (Some(_), None) => false,
            (None, Some(_)) => false,
            (Some(l_n), Some(r_n)) => {
                let left = RefCell::borrow(&l_n);
                let right = RefCell::borrow(&r_n);

                // Both trees exist but their root nodes do not have the same values
                if left.val != right.val {
                    return false;
                }

                // Now compare
                // #1 - left's left subtree to right's right subtree
                // #2 - left's right subtree to right's left subtree
                Self::compare(left.left.borrow(), right.right.borrow())
                    && Self::compare(left.right.borrow(), right.left.borrow())
            }
        }
    }
}

