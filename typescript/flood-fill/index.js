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
function floodFill(image, sr, sc, color) {
    var queue = [];
    var limitX = image.length;
    var limitY = image[0].length;
    var initColor = image[sr][sc];
    queue.push([sr, sc]);
    while (queue.length) {
        var coord = queue.shift();
        if (coord !== undefined && inside(coord, limitX, limitY)) {
            var x = coord[0];
            var y = coord[1];
            var value = image[x][y];
            var _a = [x, y - 1], northX = _a[0], northY = _a[1];
            var _b = [x + 1, y], eastX = _b[0], eastY = _b[1];
            var _c = [x, y + 1], southX = _c[0], southY = _c[1];
            var _d = [x - 1, y], westX = _d[0], westY = _d[1];
            image[x][y] = color;
            if (inside([northX, northY], limitX, limitY) && image[northX][northY] === initColor) {
                queue.push([northX, northY]);
            }
            if (inside([eastX, eastY], limitX, limitY) && image[eastX][eastY] === initColor) {
                queue.push([eastX, eastY]);
            }
            if (inside([southX, southY], limitX, limitY) && image[southX][southY] === initColor) {
                queue.push([southX, southY]);
            }
            if (inside([westX, westY], limitX, limitY) && image[westX][westY] === initColor) {
                queue.push([westX, westY]);
            }
        }
    }
    return image;
}
;
function inside(value, x, y) {
    return (value[0] >= 0 && value[0] <= (x - 1)) && (value[1] >= 0 && value[1] <= (y - 1));
}
