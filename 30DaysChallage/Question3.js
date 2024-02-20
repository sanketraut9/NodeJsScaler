// Problem 3: Execute Command
// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.


const cp = require('child_process');

function executeCommand(command){
    cp.exec(command, function(err, data){
        if (err) {
            console.log(`Error: ${err}`);
            return;
        }
        console.log(data);
    });
}


executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!