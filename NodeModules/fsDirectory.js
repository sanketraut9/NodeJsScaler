// File System - 

//directories

//create a directory

const { log } = require('console');
const fs = require('fs')


fs.mkdirSync('NodeModules')


//Check the content inside the directory

// let folderPath = 'D:\\Learning_101\\NodeJsScaler\\myDirectory'

// let foldesrContent = fs.readdirSync(folderPath)

// console.log(foldesrContent);



// To check if directory is present or not 
let doesExit = fs.existsSync('myDirectory')
console.log(doesExit);               //True or false



//remove Directory

// fs.rmdirSync('myDirectory')
// console.log('Directory has been deleted');