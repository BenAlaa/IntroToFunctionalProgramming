const _ = require('lodash');
const fp = require('lodash/fp')
const xmljs = require('xml-js');
const fs = require("fs");



// Let's pretend this is a Webservice call
const gettingWsData = () =>
   Promise.resolve(fs.readFileSync(`${__dirname}/books.xml`, "utf8"));


//Next, let’s extract the required information from the XML response.
const transformToJsObject = xmlData => 
    _(xmljs.xml2js(xmlData, {compact: true}))
    .get("Library.Book")
    .map(book => ({
        author: book.Author?._text,
        year: Number(book.Year?._text),
        price: Number(book.Price?._text)
    }));


//Finally, let’s sort by price amount.
const sortByPrice = booksArray => _.sortBy(booksArray, "price");





(async() => {
    const xmlData = await gettingWsData();

    ///////// 1 /////////
    // using flowRight method
    _.flowRight(
        console.log,
        JSON.stringify,
        sortByPrice,
        transformToJsObject
    )(xmlData)


    ////////// 2 //////////
    // using fp.compose method (lodash FP API)
    fp.pipe(
        console.log,
        JSON.stringify,
        sortByPrice,
        transformToJsObject
     )(xmlData);
})();