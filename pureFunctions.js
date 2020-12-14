/** This function is pure:
*   if the input is the same, the result will always be the same.
*/
const cubeRoot = num => Math.pow(num, 1/3);

/** This function is impure:
*   here, the same argument can produce different results.
*/
const randInt = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};





const stock = ['pen', 'pencil', 'notepad', 'highlighter'];

/** This function is impure:
*   it refers to the stock variable in the global namespace.
*/
const isInStock = item => {
  return stock.indexOf(item) !== -1;
};

/** This function is pure:
*   it does not depend on any variables outside its scope.
*/
const isInStock2 = item => {
  const stock = ['pen', 'pencil', 'notepad', 'highlighter'];
  return stock.indexOf(item) !== -1;
};

/** This function is also pure: 
*   all variables are passed in as arguments.
*/
const isInStock = (item, array) => {
  return array.indexOf(item) !== -1;
};






let fruits = ['apple', 'orange', 'apple', 'apple', 'pear'];
/** This function is pure:
*   it does not change the fruits variable.
*/
const countApples = fruits => fruits.filter(word => word === 'apple').length;

/** This function is impure:
*   it 'destructively' changes the fruits variable (a side-effect).
*/
const countApples2 = () => {
  fruits = fruits.filter(word => word === 'apple');
  return fruits.length;
};
