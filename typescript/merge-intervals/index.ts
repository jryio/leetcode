// Given an array of intervals where intervals[i] = [starti, endi], merge all
// overlapping intervals, and return an array of the non-overlapping intervals
// that cover all the intervals in the input.
//
//
// SOLUTION:
//
// Sort the intervals in terms of their starting bound
//
// Then for each sucessive interval, see if the next interval's starting bound
// overlaps with the current interval's (start-end) bounds.
//
// If it does, then update the currentInterval's end to be the nextInterval's
// end and continue as long as possible
//
// Otherwise, the next interval does not lie within the current interval, so
// push the next inteval onto the result as a disjoint interval
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => (a[0] - b[0]))

  const result = []
  let currentInterval = intervals[0]
  result.push(currentInterval)

  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i]
    // console.log("-->", { currentInterval, nextInterval })
    if (nextInterval[0] >= currentInterval[0] && nextInterval[0] <= currentInterval[1]) {
      currentInterval[0] = Math.min(currentInterval[0], nextInterval[0])
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
    } else {
      result.push(nextInterval)
      currentInterval = nextInterval
    }
  }

  return result
};

console.log("RESULT -->", merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log("RESULT -->", merge([[1, 4], [4, 5]]))
console.log("RESULT -->", merge([[0, 5]]))
