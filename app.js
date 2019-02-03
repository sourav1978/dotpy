const fs = require('fs');

fs.readdir('./', function( err,files ){
    if(err) console.log('Error:',err);
    else console.log('Result: ',files);
})
//const path = require('path');
// const os = require('os');
// var totalMem    = os.totalmem();
// var freeMem = os.freemem();

// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}` );
//console.log(path);
//var pathObj = path.parse(__filename);
//console.log(pathObj);
//var log = require('./logger');
//log(" Sourav");
//console.log(module);

// function sayHello(name){
//     console.log("Hello "+name)
// }
// sayHello('Sourav')
//New line added for testing
