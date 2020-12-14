const winston = require('winston');
const _ = require('lodash');



//Now let’s suppose we are developing a system with multiple steps — like a pipeline. 
//And we would like to log messages corresponding to a specific step, 
//maybe because we want to provide some “trackability” for our system.


// Creating an instance of winston
const logger = winston.createLogger({
    transports: [new winston.transports.Console()]
  });
  
  // Defining a log message function
  const logMessage = (level, message, step, loggerFn = logger) =>
    loggerFn[level]({ message, step });


// logMessage("info", "Assigning Carrier to order XXX", "Order Preparation")
  
  // level and step parameters are fixed. Message is the only one to be used
  const loggerStepInfo = _.partial(logMessage, "info", _, "Order Preparation");

  // Examples:
  loggerStepInfo("Doing something");
  loggerStepInfo("Doing another thing on same step");
  loggerStepInfo("Doing some last thing");