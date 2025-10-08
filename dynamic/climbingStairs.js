/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    for (let i = 0; i < n - 1; i++) { 
        let sum = one + two;
        two = one;
        one = sum;
    }
    console.log(one)
};

climbStairs(4);