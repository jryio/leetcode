package main

// Descropion:
//
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// ===========================
// Solution explained:
// ===========================
//
// By using a stack we can preserve the ordering rule in the string: An open
// left paren should be followed by a closing right paren.
//
// If we encounter an oppening paren we push it onto the stack.
//
// If we encounter a closing paren we check if the last element in the stack is
// a matching opening parent. If it is we pop the last element from the stack.
// Ohtherwise we return false.
//
// Finally we check if the stack is empty. If it is then we have a valid string.
func isValid(s string) bool {
	stack := []rune{}
	for _, c := range s {
		switch c {
		case '(':
			fallthrough
		case '[':
			fallthrough
		case '{':
			stack = append(stack, c)
		// This is the case if `c` is not an opening character
		default:
			if len(stack) == 0 || !isValidPair(stack[len(stack)-1], c) {
				return false
			}
			// pop the last element from the stack
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}

func isValidPair(open rune, close rune) bool {
	switch open {
	case '(':
		return close == ')'
	case '[':
		return close == ']'
	case '{':
		return close == '}'
	}
	return false
}

// ===========================
// Failed solution explained:
// ===========================
//
// This solution only uses a counter to determine if the number of open and
// closed parens is balanced.
//
// It does not take into account the order of the parens.
//
// As a result the following input will produce `true` when it should produce `false`
//
// "([)]" = FALSE
//
// The correct solution should be using a stack to maintain the order then short
// circuit when the order is not maintained. The solution below will continue to
// iterate through the entire string.
func isValid2(s string) bool {
	paren := 0
	curl := 0
	square := 0
	for _, c := range s {
		switch c {
		case '(':
			paren++
		case ')':
			paren--
		case '{':
			curl++
		case '}':
			curl--
		case '[':
			square++
		case ']':
			square--
		}
	}
	println(paren, curl, square)
	return paren == 0 && curl == 0 && square == 0
}
