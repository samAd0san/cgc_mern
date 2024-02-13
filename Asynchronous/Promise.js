/* To resolve the problem of callback hell, We are using 'Promise' - It handles async operations
in a more organised and managed way, Improve Readability of the code. */

/* Promise is an object which is created by the new keyword 
syntax - const variable_name = new Promise(function_name) */

// There are 3 states of Promise - pending, resolved(success), rejected(error)

// Now in Asynchronous code instead of using 'callback' we use 'Promise'.

function addAsync(a,b) {

    // we pass this function 'fn' as an argument in the promise 
    // then only we can declare parameters in the argument of the function

    // resolve and reject can take value as an argument it is its property
    function fn(resolve, reject) {
        setTimeout(() => {
            if(a === 0) 
                reject('Invalid Input');
            else
                resolve(a + b);
        });
    }

    // We have declared the nested function 'fn' in the argument of the promise
    const promise = new Promise(fn);
    // console.log(typeof promise); // object

    return promise;
}

const promise = addAsync(5,10);
// console.log(typeof promise); // object

// then is used to give the successfull output
promise.then(function(data){
    console.log(data);
})
// catch will be used to give the error
    .catch(function(err){
        console.log(err);
    });