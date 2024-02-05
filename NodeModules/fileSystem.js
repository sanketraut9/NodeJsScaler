// File System Module: 

const fs = require('fs')


//reading file

let fileContent = fs.readFileSync('fs1.txt')
console.log(`Data of file: ${fileContent}`);


//Write File:

fs.writeFileSync('fs2.txt', 'I am file 2.')           //override the file content also create file if there file doent available
console.log('file hs been written');


//Append a file
fs.appendFileSync('fs3.txt', '\n Hello from file 3')
console.log('File has been updated/appended');



//Deleting file
fs.unlinkSync('fs2.txt')
console.log('file has been deleting');

// let content = fs.readFile(cb, 'fs.txt')

// console.log(`dataa: ${content}`);