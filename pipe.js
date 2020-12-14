const _ = require('lodash');
const xmljs = require('xml-js');
const fs = require("fs");




const pipe = (...fns) => fns.reduce((prevFn, nextFn) => (arg) => nextFn(prevFn(arg)));


//Suppose we need to connect to a legacy web service (SOAP WS or similar) that still uses XML as a data format.
//Organize books by price (ascending order) and…
//Print the information in JSON format (using console.log)




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
    pipe(
        transformToJsObject,
        sortByPrice,
        JSON.stringify,
        console.log
    )(xmlData)
})();

