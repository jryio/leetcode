function twoSum(nums: number[], target: number): number[] {
  // Store a map of the {[value: number]: index : number} of the values we have
  // seen so far
  const seenValues: { [value: number]: number } = {}
  let result: Array<number> = []
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    const diff = target - value
    // Does the compliment exist in values we have seen already?
    // If so, return its index
    const diffIndex = seenValues[diff]
    if (diffIndex !== undefined) {
      result = [diffIndex, i]
    }
    seenValues[value] = i
  }
  return result
};
