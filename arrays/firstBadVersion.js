/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
const BAD_VERSION = 4; // change this for testing

var isBadVersion = function(version) {
    return version >= BAD_VERSION;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        while(left < right) {
            let midpoint = left + Math.floor((right - left) / 2);
            if (isBadVersion(midpoint)) {
                right = midpoint;
            } else {
                left = midpoint + 1;
            }
        }
        return left;
    };
};

// ---------- Local Test ----------
const n = 10;
const firstBadVersion = solution(isBadVersion);
console.log(`BAD_VERSION = ${BAD_VERSION}`);
console.log(`firstBadVersion(${n}) =`, firstBadVersion(n));
