/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let newArray = [];
    for (let i = 0; i <= intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            newArray.push(newInterval)
            return [...newArray, ...intervals.slice(i, intervals.length)]
        } else if (newInterval[0] > intervals[i][1]) {
            newArray.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }
    newArray.push(newInterval);
    return newArray;
};

console.log(insert([[1,3], [4,5], [6,9]], [2,5]))
