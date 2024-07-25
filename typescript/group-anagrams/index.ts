// SOLUTION: Group Anagrams
//
// The idea behind this approach is that an anagram has the same letters just
// re-ordered.
// Therefore to determine if a sequence of letters are anagrams, we only need to
// sort the letters in descending order. Then, two anagrams will sort to the
// same sequence of characters. We can then use this sequence as a key in a
// HashMap.
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');

    // This word has already been added as a key
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [str])
    } else {
      map.set(sortedStr, [...(map.get(sortedStr) || []), str])
    }
  }

  return Array.from(map.values());
};
