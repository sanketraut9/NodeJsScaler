const path = require('path')

function checkFileExtension(filePath, expectedExtension) {
    const extension = path.extname(filePath);

    if(extension!== expectedExtension){
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${extension}\n`);
        return;
    }
    console.log(`\n File has the expected extension: ${extension}`);
}



checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png