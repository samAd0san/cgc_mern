/* Async and await - It allows you to write asynchronous code in a linear fashion, avoiding 
callback hell and nested Promise chains.*/

/*The async keyword is used to define an asynchronous function, which returns a Promise. 

Inside an asynchronous function, the await keyword is used to pause the execution of the 
function until a Promise is resolved, allowing you to write sequential asynchronous code 
as if it were synchronous.*/

function addAsync(a,b){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(a === 0) reject('Invalid Input');
            else resolve(a + b);
        },0);
    });
}

function subAsync(a,b) {
    
    return new Promise(function(resolve,reject){
        setTimeout(() =>{
            if(a === 0) reject('Invalid Input');
            else resolve(a - b);
        });
    });
}

async function init(){
    try{
        const addRes = await addAsync(10,20);
        console.log(addRes);
        console.log(await addAsync(20,30));
        
        const subRes = await subAsync(20,10);
        console.log(subRes);
    }catch (err) {
        console.log(err);
    }
}

console.log(init());