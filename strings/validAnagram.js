/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashMapS = {};
    let hashMapT = {};
    if (s.length != t.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        hashMapS[s[i]] ? hashMapS[s[i]]++ : hashMapS[s[i]] = 1;
        hashMapT[t[i]] ? hashMapT[t[i]]++ : hashMapT[t[i]] = 1;
    }
    for (let key in hashMapS) {
        if (hashMapS[key] !== hashMapT[key]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("rat", "car"))