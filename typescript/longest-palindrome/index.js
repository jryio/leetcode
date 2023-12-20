function longestPalindrome(s) {
    var hash = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        hash[char] = hash[char] ? hash[char]++ : 1;
    }
    var sorted = Object.keys(hash).sort(function (x, y) { return hash[x] - hash[y]; });
    console.log({ sorted: sorted });
    var result = 0;
    for (var _a = 0, sorted_1 = sorted; _a < sorted_1.length; _a++) {
        var pairs = sorted_1[_a];
        if (pairs[1] % 2 === 0) {
            result = result + pairs[1];
        }
        else {
            result = result + (pairs[1] - 1);
        }
    }
    return result;
}
;
longestPalindrome("abccccdd");
