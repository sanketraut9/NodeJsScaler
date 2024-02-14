//How to produce promise

let myPromise = new Promise(function(resolve, reject){
    const a = 11;
    const b = '11';

    setTimeout(() =>{
        if(a === b){
            resolve('The values are equals')
        }else{
            reject('The values were not equals')
        }
    }, 2000)
})

//pending state
// console.log(myPromise);


//Fulfilled state - then method

//consuming promises
myPromise.then(function(result){
    console.log(result); 
})  // fulfilled state

myPromise.catch(function(failedResult){
    console.log(failedResult);
})  //rejected state