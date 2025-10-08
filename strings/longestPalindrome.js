/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {}
    let stringlen = 0;
    for (let str of s) {
        map[str] = (map[str] || 0) + 1;
        if (map[str] == 2) {
            delete map[str];
            stringlen += 2;
        }
    }
    if (Object.keys(map).length) {
        console.log("?>", map)
        stringlen++;
    }
    console.log(stringlen)
};

longestPalindrome("bb")