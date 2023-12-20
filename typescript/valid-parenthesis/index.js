// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.
//
//   "()[]{}"
//   "{[]}"
var PAREN_OPEN = '(';
var PAREN_CLOSE = ')';
var BRACKET_OPEN = '[';
var BRACKET_CLOSE = ']';
var CURLY_OPEN = '{';
var CURLY_CLOSE = '}';
function isValid(s) {
    var list = s.split('');
    var first = list.shift();
    if (first === undefined) {
        return false;
    }
    return recursive(first, list);
}
// Base case is list.lenth === 0
function recursive(open, list) {
    var char = list.shift();
    console.log("recursive start: ".concat({ open: open, char: char, list: list }));
    // BASE CASE
    if (list.length === 0) {
        // Does the `char` match what were were looking for?
        console.log("recursive base case: ".concat({ open: open, char: char, list: list, match: match(open, char) }, " "));
        return match(open, char);
    }
    // Go again if we have an opening
    if (char === PAREN_OPEN || char === BRACKET_OPEN || char === CURLY_OPEN) {
        console.log("recursive found a new opening bracket: ".concat({ open: open, char: char, list: list }));
        return recursive(char, list);
    }
    // The current char is a CLOSING char
    var doesMatch = match(open, char);
    console.log("recursive does match: ".concat({ open: open, char: char, list: list, doesMatch: doesMatch }));
    // The current char is a CLOSING which matches the given OPEN
    // But we have more items in the list so we continue processing
    if (doesMatch) {
        var next = list.shift();
        if (next === undefined) {
            return false;
        }
        return recursive(next, list);
    }
    return false;
}
function match(open, close) {
    if (open === PAREN_OPEN) {
        return close === PAREN_CLOSE;
    }
    if (open === BRACKET_OPEN) {
        return close === BRACKET_CLOSE;
    }
    if (open === CURLY_OPEN) {
        return close === CURLY_CLOSE;
    }
    return false;
}
function main(input) {
    return isValid(input);
}
main("{[]}");
