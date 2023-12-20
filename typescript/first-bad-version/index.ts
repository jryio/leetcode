/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let start = 0
    let end = n
    let lastBadVersion = 1

    while (start <= end) {
      // Define midpoint
      let mid = Math.floor((start + end) / 2)

      if (isBadVersion(mid) === true) {
        // Everything to the right of this point is T
        // Ignore it
        end = mid - 1

        // Move our lastBadVersion to here
        lastBadVersion = mid
      } else {
        // Everything to left of this is F
        start = mid + 1

      }
    }

    return lastBadVersion
  }
}
