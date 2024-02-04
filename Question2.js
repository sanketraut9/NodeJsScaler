// Problem 2: File Writer
// Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. The function should write the content to the specified file using the fs module.



const fs = require('fs')

function writeToFile(filePath, content){

    fs.writeFile(filePath, content, 'utf-8', (err) => {
        if(err){
            console.error(`Error writing to file: ${err.message}`);
            return;
        }
        console.log(`Data written to: ${filePath}`);
    });
}


writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...