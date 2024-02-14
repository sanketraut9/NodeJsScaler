// const
const fs = require('fs')


//Syncronous

console.log('1st line');

let data = fs.readFileSync('f1.txt')
console.log(`files data is ${data}`);

let data2 = fs.readFileSync('f2.txt')
console.log(`${data2}`);


console.log('last line');


//Asynchrounous:
console.log('before');

fs.readFile('f1.txt',cb)

function cb(err, data){
    if(err){
        console.log(err);
    }
    console.log(`file data: ${data}`);
    fs.readFile('f2.txt', cb2)
}


function cb2(err, data){
    if(err){
        console.log(err);
    }
    console.log(`file data: ${data}`);
}

console.log('after');
