var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function search(nums, target) {
    var result = -1;
    var startIndex = 0;
    var endIndex = nums.length - 1;
    var values = __spreadArray([], nums, true);
    var diff = (endIndex - startIndex);
    var middleIndex = Math.floor(diff / 2);
    if (nums.length < 2) {
        console.log("short circuit : ", nums[0] === target ? 0 : -1);
        return nums[0] === target ? 0 : -1;
    }
    while (startIndex !== endIndex) {
        var value = values[middleIndex];
        console.log("iteration -> ", { middleIndex: middleIndex, diff: diff, startIndex: startIndex, endIndex: endIndex, value: value });
        // Is the value at the mdidle index
        // - equal
        // - less
        // - greater
        if (target === value) {
            result = middleIndex;
            console.log("target match ", { result: result });
            return result;
        }
        // target is to the left
        //
        // cut the list in half by index
        // 1. leave the starting index where it is
        // 2. reduce the end index by -1
        if (target < value) {
            endIndex = middleIndex - 1;
            console.log("target to the left", { startIndex: startIndex, endIndex: endIndex });
        }
        // target is to the right
        else {
            startIndex = middleIndex + 1;
            console.log("target to the right", { startIndex: startIndex, endIndex: endIndex });
        }
        diff = (endIndex - startIndex);
        middleIndex = startIndex + Math.floor(diff);
        console.log("Update diff and middle ", { diff: diff, middleIndex: middleIndex });
    }
    console.log("Return", { result: result });
    return result;
}
search([-1, 0, 3, 5, 9, 12], 9);
