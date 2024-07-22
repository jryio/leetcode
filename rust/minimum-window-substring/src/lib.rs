pub struct Solution {}
impl Solution {
    /// Sliding window algorithm. len(s) = m, len(t) = n
    /// 1. Create left and right pointers, start at the beginning of s
    /// 2. Move the right pointer until at least one of each of the letters of t has been found
    /// 3. Move the left pointer to minimize the size of the window while maintaining all letters of t in s
    /// 4.
    /// Example: ADOBECODEBANC
    /// Substring: ABC
    /// - Run #1  = ADOBEC     (len 6)
    /// - Run #2  = DOBECODEBA (len 10)
    /// - Run #3  = OBECCODEBA (len 10)
    /// - Run #4  = BECODEBA   (len 8)
    /// - Run #5  = ECODEBA    (len 7)
    /// - Run #6  = CODEBA     (len 6)
    /// - Run #7  = ODEBANC    (len 7)
    /// - Run #8  = DEBANC     (len 6)
    /// - Run #9  = EBANC      (len 5)
    /// - Run #10 = BANC       (len 4)
    pub fn min_window(s: String, t: String) -> String {
        let mut best_result = s.as_str();

        if s.len() == 0 || t.len() > s.len() {
            return "".into();
        }

        best_result.into()
    }
}
