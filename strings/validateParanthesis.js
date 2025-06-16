/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openingTags = ['[', '(', '{'];
    const closingTags = [']', ')', '}'];
    let openBraces = [];
    for (let i = 0; i < s.length; i++) {
        if (openingTags.indexOf(s[i]) !== -1) {
            openBraces.push(openingTags.indexOf(s[i]))
        } else if (closingTags.indexOf(s[i]) !== -1) {
            if (openBraces[openBraces.length - 1] != closingTags.indexOf(s[i]))
                return false;
            else openBraces.pop();
        }
    }
    if (openBraces.length > 0) return false;
    return true;
};

// can improve memory by removing 
// const openingTags = ['[', '(', '{'];
// const closingTags = [']', ')', '}'];
// and using a hashmap instead or an isPair function
// then memory would be O(n)