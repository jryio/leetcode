function containsDuplicate(nums: number[]): boolean {
  const map: { [key: number]: number } = {}
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) return true
    set.add(num)
  }
  return false
};
