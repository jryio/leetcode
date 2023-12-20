function longestPalindrome(s: string): number {
  const hash = new Map<string, number>()

  for (const char of s) {
    const val = hash.get(char)
    if (val) {
      hash.set(char, val + 1)
    } else {
      hash.set(char, 1)
    }
  }
  let anyOdd = 0
  let result = 0
  for (const [_, count] of hash) {
    if (count % 2 === 0) {
      result = result + count
    } else {
      result = result + (count - 1)
      anyOdd = 1
    }
  }
  return result + anyOdd

};

longestPalindrome("abccccdd")
