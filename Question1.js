
// Problem 1: File Reader
// Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.
const fs = require('fs')


function readFileContent(filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error(`Error reading file: ${err.message}`);
        } else{
            console.log(`File Content: \n${data}`);
        }
    });
}

//test case:
readFileContent('Path of the file')

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...