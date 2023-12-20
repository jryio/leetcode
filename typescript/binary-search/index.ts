function search(nums: number[], target: number): number {
  let result = -1
  let startIndex = 0
  let endIndex = nums.length - 1

  if (nums.length < 2) {
    return nums[0] === target ? 0 : -1
  }

  while (startIndex <= endIndex) {
    let diff = (endIndex - startIndex)
    let middleIndex = startIndex + Math.floor(diff)

    if (target === nums[middleIndex]) {
      result = middleIndex
      return result
    }

    // target is to the left
    if (target < nums[middleIndex]) {
      endIndex = middleIndex - 1
    }
    // target is to the right
    else {
      startIndex = middleIndex + 1
    }
  }

  return result
}



search([-1, 0, 3, 5, 9, 12], 9)
