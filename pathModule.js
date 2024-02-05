//Path Module - to find the files path name and extension

const path = require('path')


let ext = path.extname('D:\Learning_101\NodeJsScaler\demo.txt')

console.log(ext);

let baseName = path.basename('D:\\Learning_101\\NodeJsScaler\\demo.txt')

console.log(baseName);


console.log(__filename);                   //current files path: D:\Learning_101\NodeJsScaler\pathModule.js

console.log(__dirname);               //current files directory: D:\Learning_101\NodeJsScaler