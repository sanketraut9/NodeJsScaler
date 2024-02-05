// Child process is node module used to create sun process within Script.
// you can perform diff. tasks with your script by using some methods.


const cp = require('child_process')


// cp.execSync('calc')

// cp.execSync('start chrome')
// cp.execSync('start chrome https://www.scaler.com/topics')

console.log('output '+ cp.execSync('node demo.js'));