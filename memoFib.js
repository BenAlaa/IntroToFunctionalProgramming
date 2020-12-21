const _ = require('lodash');


const getCurrentTime = () => Date.now();

const addTiming = (fn, getTime = getCurrentTime, logFnTime = logTime) => (...args) => {
    const startTime = getTime();
    const returnedValue = fn(...args);
    logFnTime(fn.name, startTime, getTime());
    return returnedValue;
}

const logTime = (fname, startTime, endTime) => {
    console.log(`${fname}: take - ${startTime - endTime} ms to execute`)
};


let fib = n => {
    if ( n <= 1) return n;
    else return fib(n-2) + fib(n-1)
}

const fibWithTiming = addTiming(fib);
// console.log(fibWithTiming(10))
// console.log(fibWithTiming(20))
// console.log(fibWithTiming(30))
// console.log(fibWithTiming(40))
// console.log(fibWithTiming(50))

// using lodash to memo fib
// fib = _.memoize(fib);
// console.log(fibWithTiming(10))
// console.log(fibWithTiming(20))
// console.log(fibWithTiming(30))
// console.log(fibWithTiming(40))
// console.log(fibWithTiming(50))




//implementing memo function 
const memo = (fn) => {
    let memo = {};
    return (...args) => {
        if(args in memo) return memo[args];
        else return (memo[args] = fn(...args))
    }

}

fib = memo(fib);
console.log(fibWithTiming(10))
console.log(fibWithTiming(20))
console.log(fibWithTiming(30))
console.log(fibWithTiming(40))
console.log(fibWithTiming(50))










// so how can we optimize that