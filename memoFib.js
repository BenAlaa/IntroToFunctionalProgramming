const _ = require('lodash');


const getCurrentTime = () => Date.now();

const addTiming = (fn, getTime = getCurrentTime, logFnTime = logTime) => (...args) => {
    const startTime = getTime();
    const returnedValue = fn(...args);
    logFnTime(fn.name, startTime, getTime());
}

const logTime = (fname, startTime, endTime) => {
    console.log(`${fname}: take - ${startTime - endTime} ms to execute`)
};


let fib = n => {
    if ( n <= 1) return n;
    else return fib(n-2) + fib(n-1)
}

const fibWithTiming = addTiming(fib);
// fibWithTiming(10);
// fibWithTiming(20);
// fibWithTiming(30);
// fibWithTiming(40);
// fibWithTiming(50);

// using lodash to memo fib
// fib = _.memoize(fib);
// fibWithTiming(10);
// fibWithTiming(20);
// fibWithTiming(30);
// fibWithTiming(40);
// fibWithTiming(50);




// implementing memo function 
const memo = (fn) => (...args) => {
    let memo = {};
    return () => {
        if(args in memo) return memo[args];
        else return (memo[args] = fn(...args))
    }

}
fib = memo(fib);
fibWithTiming(10);
fibWithTiming(20);
fibWithTiming(30);
fibWithTiming(40);
fibWithTiming(50);










// so how can we optimize that