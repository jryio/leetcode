// Given the starting coord
// * Find all neighbors with the same color (4-dir)
// * Enqueue the neighbors with the same color
// * For each item in the queue
// *    Find all neighbors with the same color
// *    if (neighbor not in queue)
// *      enqueue
// *    Change the color to the target color
// *    remove item from queue?
// * Return final matrix
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  let queue: Array<[number, number]> = []
  const limitX = image.length
  const limitY = image[0].length
  const initColor = image[sr][sc]

  queue.push([sr, sc])

  if (initColor === color) {
    return image
  }
  while (queue.length) {
    const coord = queue.shift()
    if (coord !== undefined && inside(coord, limitX, limitY)) {
      const x = coord[0]
      const y = coord[1]
      const value = image[x][y]
      const [northX, northY] = [x, y - 1]
      const [eastX, eastY] = [x + 1, y]
      const [southX, southY] = [x, y + 1]
      const [westX, westY] = [x - 1, y]
      image[x][y] = color
      if (inside([northX, northY], limitX, limitY) && image[northX][northY] === initColor) {
        queue.push([northX, northY])
      }
      if (inside([eastX, eastY], limitX, limitY) && image[eastX][eastY] === initColor) {
        queue.push([eastX, eastY])
      }
      if (inside([southX, southY], limitX, limitY) && image[southX][southY] === initColor) {
        queue.push([southX, southY])
      }
      if (inside([westX, westY], limitX, limitY) && image[westX][westY] === initColor) {
        queue.push([westX, westY])
      }
    }
  }
  return image
};

function inside(value: [number, number], x: number, y: number): boolean {
  return (value[0] >= 0 && value[0] <= (x - 1)) && (value[1] >= 0 && value[1] <= (y - 1))
}
