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


function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true
  }

  let balanced = true


  function dfs(root: TreeNode | null): number {
    if (root == null) {
      return 0
    }
    else if (balanced) {

      const left = dfs(root.left)
      const right = dfs(root.right)

      if (Math.abs(left - right) > 1) {
        balanced = false
      }

      return 1 + Math.max(left, right)
    } else {
      return 0
    }
  }

  dfs(root)

  return balanced
}
