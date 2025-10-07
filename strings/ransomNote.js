/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   let freq = {};
   for (let r of magazine) {
        freq[r] = (freq[r] || 0) + 1
   }
   for (let m of ransomNote) {
        if (!freq[m]) {
            return false;
        }
        freq[m]--;
   }
   return true;
};

console.log(canConstruct("yesc", "yesterday"))