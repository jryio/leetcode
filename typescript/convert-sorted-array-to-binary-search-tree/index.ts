// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height - balanced binary search tree.
//
// A height-balanced binary tree is a binary tree in which the depth of the two
// subtrees of every node never differs by more than one.


/** Definition for a binary tree node. */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


// nums is sorted in strictly increasing order
//
//
// NOTES:
//
// THis is is a problem where dividing the array in half will prove to be
// helpful since we already know the sorting is ascending...
//
// Therefore we should recursively call sortedArrayToBST in order to build the
// BST.
//
//
// SOLUTION EXPLANATION:
//
// This solution uses divide and conquere to build the BST.
//
// We rely on the fact that the input array is strictly sorted, which gives us
// the ability to split the input repeated (D&C), knowing that the middle
// element will be the root, and the left/right sections of the input array will
// be the left and right nodes respectively
function sortedArrayToBST(nums: number[]): TreeNode | null {
  // BASE CASE - No more numbers of null array
  if (!nums || !nums.length) {
    return null
  }

  // If there is only one element in the array, then this is a leaf node of the BST
  if (nums.length === 1) {
    return new TreeNode(nums[0], /*left*/ null, /*right*/ null)
  }

  if (nums.length == 2) {
    return new TreeNode(nums[1], new TreeNode(nums[0], null, null), null)
  }

  const mid = Math.floor(nums.length / 2)
  const midNum = nums[mid]

  const leftNums = nums.slice(0, mid)
  const rightNums = nums.slice(mid + 1)

  const leftNode = sortedArrayToBST(leftNums)
  const rightNode = sortedArrayToBST(rightNums)

  const midNode = new TreeNode(midNum, leftNode, rightNode)
  return midNode
};

let input = []

// input = [-10, -3, 0, 5, 9]
// console.log(`INPUT ${input} --> ${sortedArrayToBST(input)}`)

// input = [1, 3]
// console.log(`INPUT ${input} --> ${JSON.stringify(sortedArrayToBST(input))}`)

input = [1, 2, 3, 4]
console.log(`INPUT ${input} --> ${JSON.stringify(sortedArrayToBST(input))}`)

// input = [1, 2, 3, 4, 5]
// console.log(`INPUT ${input} --> ${JSON.stringify(sortedArrayToBST(input))}`)
