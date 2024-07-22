/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = MinStack::new();
 * obj.push(val);
 * obj.pop();
 * let ret_3: i32 = obj.top();
 * let ret_4: i32 = obj.get_min();
 */

struct MinStack {
    // (stack value, min value)
    stack: Vec<(i32, i32)>,
    min: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {
    fn new() -> Self {
        Self {
            stack: Vec::new(),
            min: std::i32::MAX,
        }
    }

    fn push(&mut self, val: i32) {
        let prev_min = match self.stack.last() {
            Some((_val, prev_min)) => *prev_min,
            None => std::i32::MAX,
        };
        let current_min = if val <= prev_min { val } else { prev_min };
        self.stack.push((val, current_min));
    }

    fn pop(&mut self) {
        match self.stack.pop() {
            None => {
                // Reset the min
                println!("RESETTING MIN b.c. None");
                self.min = std::i32::MAX;
            }
            Some(_) => {
                if self.stack.len() == 0 {
                    // Reset the min
                    println!("RESETTING MIN b.c. last item now empty");
                    self.min = std::i32::MAX;
                }
            }
        };
    }

    fn top(&self) -> i32 {
        match self.stack.last() {
            Some((val, _min)) => *val,
            // This should never be called becuase the problem
            // description states that this method
            // will never be called on an empty stack
            None => 0,
        }
    }

    fn get_min(&self) -> i32 {
        match self.stack.last() {
            Some((_val, min)) => *min,
            None => 0,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_last_item_min() {
        println!("MAX IN i32 = {}", std::i32::MAX);
        let mut stack = MinStack::new();
        stack.push(2147483646);
        stack.push(2147483646);
        stack.push(2147483647);

        assert_eq!(stack.top(), 2147483647);
        stack.pop();
        assert_eq!(stack.get_min(), 2147483646);
        stack.pop();
        assert_eq!(stack.get_min(), 2147483646);
        stack.pop();
    }
}
