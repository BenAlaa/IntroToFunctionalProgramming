const _ = require("lodash");
//let’s say you have a function that calculates discounts given a certain percentage

const calculateDiscount = (discount, price) => price - (price * discount) / 100;
// console.log(calculateDiscount(10, 2000));



//Now, let’s imagine a situation where we need to apply always the same discount to different products (with different prices).
// console.log(calculateDiscount(10, 2000));
// console.log(calculateDiscount(10, 500));
// console.log(calculateDiscount(10, 750));
// console.log(calculateDiscount(10, 900));

const apply10percDiscount = _.curry(calculateDiscount)(10);

console.log(apply10percDiscount(1000));
console.log(apply10percDiscount(500));
console.log(apply10percDiscount(750));
console.log(apply10percDiscount(900)); 

