const fs = require('fs');
const path = require('path');

/////////////
//Example 1//
////////////

//impure function
const getFileContent = fileName => fs.readFileSync(path.join(__dirname,fileName),"utf-8", (err, data) => {
    if(err) throw err;
    return data;
});


//pure function
// injecting impure function in pure function
const getWordsCountFromFile = (fileName, getContentFromFile = getFileContent) => {
    return getContentFromFile(fileName);
}


console.log(`File Has ${getWordsCountFromFile("file.txt").split(" ").length} words`)







/////////////
//Example 2//
////////////

//impure
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

//decoupled
const getRandomIntDecoupled = (min, max, random = Math.random) => {
    return Math.floor(random() * (max - min)) + min;
}


// but it still impure this way give us a great advantages when running tests.
