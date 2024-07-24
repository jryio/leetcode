// Given a string s, find the length of the longest
// substring
// without repeating characters.
//
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



// APPROACH
//
// I think I want to use the sliding window technique to check for substrings
// continuously until I hit one that has a repeating character.
//
// Then store the association between [substring] -> length in a hash map

// function lengthOfLongestSubstring(s: string): number {
//   let left = 0
//   let right = 1

//   let sub = s.charAt(0)
//   let maxLength = sub.length

//   while (right < s.length) {
//     const leftChar = s.charAt(left)
//     const rightChar = s.charAt(right)
//     console.log("1--> ", { s: s.length, subLength: sub.length, maxLength, sub, left, right, leftChar, rightChar })

//     if (leftChar == rightChar) {
//       console.log("!!!! Caught a loop === moving past it by bumping both values ", { maxLength, subLength: sub.length })
//       left = right
//       right = right + 1
//       continue
//     }

//     // Found a repeating character in this substring, which means we are done
//     // with this search!
//     if (sub.includes(rightChar)) {
//       if (sub.length > maxLength) {
//         console.log("!!!! Updating Max Length from ", { maxLength, subLength: sub.length })
//         maxLength = sub.length
//       }


//       // Move the window over
//       left = right - 1
//       right = right
//       // reset the substring to be the new left
//       sub = s.charAt(left)
//       console.log("!!!! Found a duplicate ", { s: s.length, subLength: sub.length, maxLength, sub, left, right, leftChar, rightChar })
//       continue
//     }

//     // We did not find an existing character in the substring, so push the
//     // current right character on to the substring and move the window over
//     sub = sub.concat(rightChar)
//     right = right + 1
//     if (sub.length > maxLength) {
//       console.log("!!!! Updating Max Length from ", { maxLength, subLength: sub.length })
//       maxLength = sub.length
//     }
//     console.log("2--> ", { s: s.length, subLength: sub.length, maxLength, sub, left, right, leftChar, rightChar })
//   }
//   return maxLength
// };


// =========================================
// This solution is not optimal. It uses O(n^2) time
//
// The better solution would be to use O(n) time by using a HashMap of [char] -> index
//
// Then the algorithm becomes:
//
// * Use a left and right index
// * Increase the right index in a loo
// * Check to see if the current right character already exists in the HashMap
// * If it exists and the latest index of that character is >= to the left
//   index, then we should move the left index over to
// =========================================
//
// function lengthOfLongestSubstring(s: string): number {
//   let maxLength = s.length ? 1 : 0;
//   for (let left = 0; left < s.length; left++) {

//     const leftChar = s.charAt(left)
//     let sub = leftChar

//     for (let right = left + 1; right < s.length; right++) {
//       const rightChar = s.charAt(right)
//       if (leftChar === rightChar) { break }

//       // The right character already exists in this substring, so we should not
//       // add it
//       if (sub.includes(rightChar)) {
//         // Update max length if relevant
//         if (maxLength < sub.length) { maxLength = sub.length }
//         break
//       }
//       // The right character does not already exist in the substring, so we
//       // should add it
//       else {
//         sub = sub.concat(rightChar)
//         // Update max length if relevant
//         if (maxLength < sub.length) { maxLength = sub.length }
//       }
//     }
//   }
//   return maxLength
// }


// ===================================================
// Optimal sliding window solution!
//
// I did not write this solution
// ===================================================
// We can solve this using a dynamic "sliding window" that
// shrinks or grows whenever certain conditions are met
const lengthOfLongestSubstring = function(characters: string) {
  // Setting to 0 takes care of the edge case where "characters" is ''
  let length = 0

  // Map will store each character and the last index they were looped over at
  let characterMap = new Map()

  // We declare a left index since a sliding window requires two indices
  // (left and right) to track the window of elements the indices surround
  let leftIndex = 0

  // Begin looping through each character in the string.
  // rightIndex will always be greater the leftIndex to create a "window" of elements
  for (let rightIndex = 0; rightIndex < characters.length; rightIndex++) {

    // Get current character for better readability
    const character = characters[rightIndex]

    // Check if character exists and if its last index is greater than the
    // current leftIndex. If we don't check it's leftIndex, we're setting
    // it to a previous result which'll provide incorrect values
    // when calculating the window length
    if (characterMap.has(character) && characterMap.get(character) >= leftIndex) {
      // set left index to last index where the character was found plus one
      leftIndex = characterMap.get(character) + 1
    }

    // Which is greater, the last iteration's window length, or the current
    // interation's window length? We decide here, then set our result length
    // to that number. We add 1 since we need to take into account every element
    // within the window (2 - 0 = 2, although there are three elements, so add 1)
    length = Math.max(length, rightIndex - leftIndex + 1)

    // Add character and its index to map, or, if it exists,
    // automatically overwrite its index with the current
    characterMap.set(character, rightIndex)
  }

  return length
};

// console.log("  - RETURN -> ", lengthOfLongestSubstring(" "))
// console.log("  - RETURN -> ", lengthOfLongestSubstring(""))
// console.log(" bbbbbb - RETURN -> ", lengthOfLongestSubstring("bbbbbb"))
// console.log(" pwwkew - RETURN -> ", lengthOfLongestSubstring("pwwkew"))
// console.log(" au - RETURN -> ", lengthOfLongestSubstring("au"))
// console.log(" bb - RETURN -> ", lengthOfLongestSubstring("bb"))
// console.log(" dvdf - RETURN -> ", lengthOfLongestSubstring("dvdf"))
// console.log(" abcabcbb - RETURN -> ", lengthOfLongestSubstring("abcabcbb"))
console.log(" wobgrovw - RETURN -> ", lengthOfLongestSubstring("wobgrovw"))
// console.log(" dvdd - RETURN -> ", lengthOfLongestSubstring("dvdd"))
