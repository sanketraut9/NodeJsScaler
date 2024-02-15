function placeOrder(order){
    return new Promise(function(resolve, reject){
        if(order === 'coffee'){
            resolve('Order for coffee received')
        }else{
            reject('Other order rejected')
        }
    })
}


function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(`${order} and is served`)
    })
}


// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);

//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed
// }).then(function(processOrder){
//     console.log(processOrder);
// })          //chaining of promise




//Async wait - key words

async function servedOrder(){
   try {
    let orderPlaced = await placeOrder('tea')
    console.log(orderPlaced);

    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder);
   } catch (error) {
    console.log(error);
   }
}

servedOrder()

