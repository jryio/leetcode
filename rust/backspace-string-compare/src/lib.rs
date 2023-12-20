/// Given two strings s and t, return true if they are equal when both are typed into empty text
/// editors. '#' means a backspace character.
///
/// Note that after backspacing an empty text, the text will continue empty.
///
/// 1 <= s.length, t.length <= 200
/// s and t only contain lowercase letters and '#' characters.
///
/// Can you solve in O(n) time and O(1) space
///
/// Aglorithm:
///
/// 1. Reverse the string as an iterator
/// 2. Move through the iterator
/// 3. If the `#` character is encountered, then delete the next item from the iterator
/// 4. For multiple `#`, add them to a stack or to a counter
///
///
/// https://leetcode.com/problems/backspace-string-compare/description/
pub fn backspace_compare(s: &str, t: &str) -> bool {
    let new_s = process(s);
    let new_t = process(t);
    new_s == new_t
}

fn process(s: &str) -> Vec<char> {
    let mut new_str: Vec<char> = Vec::new();
    let mut backspace_count: usize = 0;
    for c in s.chars().rev() {
        match c {
            '#' => {
                backspace_count += 1;
            }
            _ => {
                // The previous character was a backspace so skip this current character
                if backspace_count > 0 {
                    backspace_count -= 1;
                    continue;
                }
                // We can push this character on to the new string since it
                else {
                    new_str.push(c);
                }
            }
        }
    }
    new_str
}

mod test {
    use crate::backspace_compare;

    #[test]
    fn name() {
        assert_eq!(backspace_compare("ab##", "c#d#"), true);
        assert_eq!(backspace_compare("ab#c", "ad#c"), true);
        assert_eq!(backspace_compare("a#c", "b"), false);
    }
}
