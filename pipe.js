const _ = require('lodash');
const fp = require('lodash/fp')
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




// console.log(JSON.stringify(sortByPrice(transformToJsObject(gettingWsData))));


(async() => {
    const xmlData = await gettingWsData();

    ///////// 1 /////////
    // we can do this like this
    // let booksArray = transformToJsObject(xmlData);
    // booksArray = sortByPrice(booksArray);
    // const jsonData = JSON.stringify(booksArray);
    // console.log(jsonData);



    ////// 2 ////////////
    // also we can do this
    // console.log(JSON.stringify(sortByPrice(transformToJsObject(xmlData))));




    /////// 3 ///////
    // using flow method (lodash standard API)
    // _.flow(
    //     transformToJsObject,
    //     sortByPrice,
    //     JSON.stringify,
    //     console.log
    //  )(xmlData);





    ////////// 4 //////////
    // using fp.pipe method (lodash FP API)
    // fp.pipe(
    //     transformToJsObject,
    //     sortByPrice,
    //     JSON.stringify,
    //     console.log
    //  )(xmlData);





    //////// 5 ///////
    // using our pipe method
    pipe(
        transformToJsObject,
        sortByPrice,
        JSON.stringify,
        console.log
    )(xmlData)
})();

