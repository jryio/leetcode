const cache: Array<number> = []

function climbStairs(n: number): number {
  if (n <= 3) return n
  if (!cache[n]) { cache[n] = climbStairs(n - 2) + climbStairs(n - 1) }
  return cache[n]
}
