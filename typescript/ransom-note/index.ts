/*
  * Another possible algorithm goes as follows
  *
  * if the ransom note is longer than the magazine -> false
  *  for every character in the ransomNote
  *   if the character is not in the magazine -> false
  *   update the magazine string and remove the character at index i with '' (remove it)
  */
function canConstruct(ransomNote: string, magazine: string): boolean {

  const hash: { [key: string]: number } = {}

  for (let i = 0; i < magazine.length; i++) {
    const mChar = magazine[i]
    hash[mChar] = hash[mChar] ? hash[mChar] + 1 : 1
    if (i < ransomNote.length) {
      const rChar = ransomNote[i]
      hash[rChar] = hash[rChar] ? hash[rChar] - 1 : -1
    }
  }

  let isValid = true
  for (const char of ransomNote) {
    isValid = isValid && (hash[char] >= 0)
  }
  return isValid
};
