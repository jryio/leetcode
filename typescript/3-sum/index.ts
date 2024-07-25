// SOLUTION EXPLAINED:
//
// I did not get this at all, I was not able to figure out an algorithm to solve
// this...
//
// However, this solution is intuitive so I will make an effort to explain it.
//
// Sort the array
//
// Start at the smallest number
//
// Then use two pointers: left = i + 1, right = nums.length - 1
//
// This means we are working our way from both ends fo the sorted list at the
// same time...
//
// sum = current + left + right
//
// If the sum is greater than zero, we know it's too large, so we should decrease our right--
// If the sum is less than zero we know it is too small, we should increase our left++
//
// This way we are walking the remaining two numbers in x + y + z = 0 closer to
// zero with every iteration.
//
// Note that this works because the list is sorted
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const map = new Map<string, number>();

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        const result = JSON.stringify([nums[i], nums[left], nums[right]])
        if (!map.has(result)) {
          map.set(result, 1)
        }
        left = left + 1
      } else if (sum < 0) {
        left = left + 1
      } else {
        right = right - 1
      }
    }
  }
  return Array.from(map.keys()).map((key) => JSON.parse(key))
};
