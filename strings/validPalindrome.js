/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "";
    for (let i=0; i<s.length; i++) {
        let ascii = s[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90) ||
            (ascii >= 97 && ascii <= 122) ||
            (ascii >= 48 && ascii <= 57)) {
            str += s[i].toLowerCase();
        }
    }
    for (i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true;
};


// optimised solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        // Skip non-alphanumeric from left
        while (l < r && !isAlphaNumeric(s[l])) l++;
        // Skip non-alphanumeric from right
        while (l < r && !isAlphaNumeric(s[r])) r--;

        if (s[l] !== s[r]) {
            return false;
        }

        l++;
        r--;
    }

    return true;

    function isAlphaNumeric(c) {
        return /[a-zA-Z0-9]/.test(c);
    }
};