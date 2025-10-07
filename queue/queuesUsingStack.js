var s1, s2;
var MyQueue = function() {
    s1 = [];
    s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    console.log("push called", x)
    s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {

    if (s2.length) {
        return s2.pop();
    }
    else {
        while(s1.length) {
            s2.push(s1.pop())
        }
         if (s2.length) {
            return s2.pop();
        }
    }

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    var peekedElem;
    if (s2.length) {
        peekedElem = s2.pop();
    }
    else {
        while(s1.length) {
            s2.push(s1.pop())
        }
         if (s2.length) {
            peekedElem = s2.pop();
        }
    }
    s2.push(peekedElem);
    return peekedElem;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !(s1.length || s2.length)
};

const operations = ["MyQueue", "push", "push", "peek", "pop", "empty"];
const values = [[], [1], [2], [], [], []];

let result = [];
let obj = null;

operations.forEach((op, i) => {
    if (op === "MyQueue") {
        obj = new MyQueue();
        result.push(null);
    } else {
        const res = obj[op](...values[i]);
        result.push(res === undefined ? null : res);
    }
});
console.log("result :: ", result)
