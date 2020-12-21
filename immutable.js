const Immutable = require('immutable');
// in javascript String and Number are immutable data types


let num=7;
num +=1;


let myString = "I am immutable";
let newString = myString.slice(0,7);






//Arrays and Objects Are Mutable
// let x = {
//     foo: 'bar'
// };
// var y = x;
// x.foo = 'something else'
// console.log(y.foo);
// console.log(x === y)



// let xArr = ['foo'];
// let yArr = xArr.push('bar')
// console.log(xArr);
// console.log(xArr === yArr)


//Array Mutator methods
// copyWithin
// fill
// pop
// push
// reverse
// shift
// sort
// splice
// unshift


//Array immutable methods
//map
//filter
//reduce













// Going Immutable in JavaScript
//Objects

/////// 1 ///////
//using Object.freeze in ES5



//////// 2 ////////
//using Object.assign in ES6
1
// const person = {
//   name: 'Jim',
//   age: 19
// }
// const newPerson = Object.assign({}, person, {
//   age: 22
// })
// console.log(newPerson === person) // false
// console.log(person) // { name: 'Jim', age: 19 }
// console.log(newPerson) // { name: 'Jim', age: 22 }





/////// 3 //////////
//using spread operator
// const person = {
//     name: 'Jim',
//     age: 19
// }
// const newPerson = {
//     ...person,
//     age: 22
// }
// console.log(newPerson === person) // false
// console.log(newPerson) // { name: 'Jim', age: 22 }












//Arrays
////// 1 //////
//using spread operator
// const fruits = ['peach', 'pear', 'apple', 'plum']
// const newFruits = [...fruits, 'orange']
// console.log(fruits === newFruits) //false




//////// 2 /////////
//using map and filter


























// using immutable.js

const createGame = (options) => {
    const {rows, cols, mines} = options;
    return Immutable.fromJS({
        cols,
        rows,
        tiles: iniTiles(rows, cols, mines)
    })
}

// const revealTile = (game, tile) => {
//     const updatedTile = game.get('tiles').get(tile).set('isReveals', true);
//     const updatedTiles = game.get('tiles').set(tile, updatedTile)
//     return game.set('tiles', updatedTiles);
// }

const revealTile = (game, tile) => {
    return game.setIn(['tiles', tile, 'isRevealed'], true);
}