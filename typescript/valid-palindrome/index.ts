// racecar -- 7 even
// amanaplanacanalpanama --
function isPalindrome(s: string): boolean {
  "ab_a".replace(/[^\x00-\x7F]/g, "").replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").trim().replace(" ", "").toLowerCase()

  s = s.replace(/[^\x00-\x7F]/g, "")
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")
    .trim()
    .replace(" ", "")
    .toLowerCase()
  if (s === "") {
    return true
  }
  if (s.length % 2 === 0) {
    return s.substring(0, s.length / 2) === s.substring(s.length / 2, s.length).split("").reverse().join("")
  } else {
    return s.substring(0, s.length / 2) === s.substring((s.length / 2) + 1, s.length).split("").reverse().join("")
  }
}

isPalindrome("A man, a plan, a canal: Panama")
