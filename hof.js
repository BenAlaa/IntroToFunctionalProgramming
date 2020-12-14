// measuring time

//log the time a function to complete

// first

const calculateRectArea = (height, width) => height * width;

// (() => {
//     const startTime = Date.now();
//     const rectangleArea = calculateRectArea(2, 3);
//     const time = Date.now() - startTime;
//     console.log(`Function calculateRectangleArea took ${time} to complete`);
//   })();

// this works well.
// but what if we need to reuse this logic with another function?
// would wh have to repeat this all over again?

//so let's implement HOF that takes any function as a parameter and generate a new function that log the executed time.

const getCurrentTime = () => Date.now();

const addTiming = (fn, getTime = getCurrentTime, logFnTime = logTime) => (...args) => {
    const startTime = getTime();
    const returnedValue = fn(...args);
    logFnTime(fn.name, startTime, getTime());
}

const logTime = (fname, startTime, endTime) => {
    console.log(`${fname}: take - ${startTime - endTime} ms to execute`)
};

const calculateAreaWithTiming = addTiming(calculateRectArea);

calculateAreaWithTiming(10, 20);
