package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

// ===========================
// Description:
// ===========================
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// ===========================
// Solution Explained:
// ===========================
// If either list1 or list2 are nil, then we know we have reached the end of
// that list. Therefore the rest of the merged list should be the other list.
//
// Otherwise, we can assume that we have a valid node for both lists, so we can
// comparse the values at each node.
//
// If list1.Val is less than list2.Val then we shoul db returning list1 first
// and merging the rest of the list1.Next with list2.
//
// If list2.Val is less than list1.Val then we should be returning list2 first
// // and merging the rest of the list2.Next with list1.

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	// Reached the end of list1, therefore the rest of the merged list should be list2
	if list1 == nil {
		return list2
	}
	// Reached the end of list2, therefore the rest of the merged list should be list1
	if list2 == nil {
		return list1
	}

	if list1.Val <= list2.Val {
		list1.Next = mergeTwoLists(list1.Next, list2)
		return list1
	} else {
		list2.Next = mergeTwoLists(list1, list2.Next)
		return list2
	}
}
