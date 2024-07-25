function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => b - a); // Descending order
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
  );
};


console.log(maximumProduct([1, 2, 3]))
console.log(maximumProduct([-4, -3, -2, -1, 1, 2, 3, 4, 5]))
