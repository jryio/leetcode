// DESCRIPTION:
//
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
//
// SOLUTION EXPLANATION:
//
// This solution is using the generic appraoch of maximum subarray
// (but not using a Dynamic Programming array dp[i] although they are effectively the same)
//
// We start off with the first element nums[0] as the largest sum we have seen so far
//
// Then we ask: "Which is bigger?"
// 1) the current number num[i]
// 2) the largest sum we have seen so far + num[i]
//
// Therefore largest sum = MAX(1 or 2)
//
// If the current largest sum is bigger than any other we have seen, then...
// overall max sum = MAX(overall max sum, OR, current largest sum)
//
// Return the overall largest sum we've seen thusfar

function maxSubArray(nums: number[]): number {
  let currentMaxSum = nums[0]
  let overallMaxSum = nums[0]

  if (nums.length === 1) { return nums[0] }

  for (let i = 1; i < nums.length; i++) {
    currentMaxSum = Math.max(nums[i], currentMaxSum + nums[i])
    overallMaxSum = Math.max(currentMaxSum, overallMaxSum)
  }

  return overallMaxSum
};
