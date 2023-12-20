function isAnagram(s: string, t: string): boolean {
  return sorted(s) === sorted(t)
};

function sorted(x: string): string {
  return x.split("").sort().join("")
}
