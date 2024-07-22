package main

// Description:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
//
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Solution explained:
//
// This solution can be solved in less than O(n^2) time by using a hash map to
// check for a previous number in the array whose complement would be current +
// previous = target.
//
// # We do this by iterating through the array of numbers once
//
// On each iteration, we check if the complement of the current number is in the
// hash map of (value -> index).
// If we find one, then we know that the current number + previous number in the
// hash map will equal the target number. Therefore we can return the pair of
// indices as the solution.
// Otherwise we will return nil.
func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		if j, ok := m[target-num]; ok {
			return []int{j, i}
		}
		m[num] = i
	}
	return nil
}
