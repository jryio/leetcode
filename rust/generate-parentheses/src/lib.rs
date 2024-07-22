struct Solution {}
impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        let mut all = Vec::new();
        Self::build(2 * n, 0, &mut Vec::new(), &mut all);
        all
    }
    pub fn build(n: i32, diff: i32, current: &mut Vec<char>, all: &mut Vec<String>) -> () {
        // Path did not produce a balanced set a parentheses
        if diff == -1 || diff > n {
            return;
        }
        if n == 0 {
            // Successfuly found a path for a balanced ordering of parentheses
            if diff == 0 {
                all.push(current.iter().collect());
            }
            return;
        }

        // go left - add '('
        current.push('(');
        Self::build((n - 1), (diff + 1), current, all);
        current.pop();

        // go right - add ')'
        current.push(')');
        Self::build((n - 1), (diff - 1), current, all);
        current.pop();
    }
}

