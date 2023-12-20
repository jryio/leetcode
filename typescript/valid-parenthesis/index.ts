// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.
//
//   "()[]{}"
//   "{[]}"
const PAREN_OPEN = '('
const PAREN_CLOSE = ')'
const BRACKET_OPEN = '['
const BRACKET_CLOSE = ']'
const CURLY_OPEN = '{'
const CURLY_CLOSE = '}'

const PAIRS: { [open: string]: string } = {
  [PAREN_CLOSE]: PAREN_OPEN,
  [BRACKET_CLOSE]: BRACKET_OPEN,
  [CURLY_CLOSE]: CURLY_OPEN,
}

function isValid(s: string): boolean {
  const stack: Array<string> = []
  const list = s.split('')

  for (const char of list) {
    if (isClosing(char)) {
      const latestOpen = stack.pop()

      if (PAIRS[char] !== latestOpen) {
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}

function isClosing(char: string): boolean {
  return PAIRS.hasOwnProperty(char)
}
